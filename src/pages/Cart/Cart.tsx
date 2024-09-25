import React, { useContext, useEffect } from "react";
import { ProductType, ShopType } from "../../types/types";
import { SelectedProductContext } from "../../context/selectedProductContext";
import CartItem from "./CartItem/CartItem";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import "./Cart.scss";
import axios from "axios";
import { getStripe } from "../../utils/getStripe";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    totalAmount,
    setTotalAmount,
    setTotalNumberOfItems,
    setLoading,
    loading,
  } = useContext<ShopType>(SelectedProductContext);

  const handleCheckout = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const stripe = await getStripe();

    try {
      setLoading(true);
      const response = await axios.post(
        "https://mernstore-backend.onrender.com/stripe/create-checkout-session",
        {
          cartItems: cartItems,
        }
      );

      const sessionId = response.data.id;
      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedAmount = localStorage.getItem("totalAmount");
    const storedNumberOfProducts = localStorage.getItem("numberOfProducts");

    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedAmount) setTotalAmount(JSON.parse(storedAmount));
    if (storedNumberOfProducts)
      setTotalNumberOfItems(JSON.parse(storedNumberOfProducts));
  }, []);

  return (
    <>
      <div className="cart-container wrapper">
        {!loading ? (
          cartItems.map((product: ProductType) => {
            return <CartItem product={product} key={product._id}></CartItem>;
          })
        ) : (
          <Loading></Loading>
        )}
        {totalAmount === 0 && (
          <p className="no-items-cart-text">No items in cart</p>
        )}
        <div className="cart-total-price-container">
          <p className="cart-total-amount-text">Order value:</p>
          <p className="cart-total-amount-text">${totalAmount.toFixed(2)}</p>
        </div>
        <div className="cart-btns-container">
          <Link to="/products">
            <button className="cart-btn continue-btn">Continue Shopping</button>
          </Link>

          {totalAmount !== 0 && !loading ? (
            <button className="cart-btn" onClick={(e) => handleCheckout(e)}>
              Checkout
            </button>
          ) : (
            <button className="cart-btn-disabled" disabled>
              Checkout
            </button>
          )}
        </div>
      </div>
      <Delivery></Delivery>
      <Footer></Footer>
    </>
  );
};

export default Cart;
