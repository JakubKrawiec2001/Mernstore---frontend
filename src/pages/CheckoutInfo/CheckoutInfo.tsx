import React, { useContext, useEffect } from "react";
import "./CheckoutInfo.scss";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import successIcon from "../../assets/icons/success.png";
import { Link, useLocation } from "react-router-dom";
import { TbShoppingBagX } from "react-icons/tb";
import { SelectedProductContext } from "../../context/selectedProductContext";

const CheckoutInfo = () => {
	const { setCartItems, setTotalAmount, setTotalNumberOfItems } = useContext(
		SelectedProductContext
	);
	const location = useLocation();

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify([]));
		localStorage.setItem("totalAmount", JSON.stringify(0));
		localStorage.setItem("numberOfProducts", JSON.stringify(0));
		setCartItems([]);
		setTotalAmount(0);
		setTotalNumberOfItems(0);
	}, []);

	return (
		<>
			<div className="checkout-container">
				<div className="checkout-box">
					{location.pathname === "/checkout-info-success" ? (
						<img
							src={successIcon}
							alt="Shopping cart with a success sign"
							className="checkout-icon"
						/>
					) : (
						<TbShoppingBagX className="checkout-icon-cancel" />
					)}

					<h2
						className={
							location.pathname === "/checkout-info-success"
								? "checkout-heading"
								: "checkout-heading checkout-heading-cancel"
						}>
						{location.pathname === "/checkout-info-success"
							? "Thank You For Your Pusrchase"
							: "Payment canceled"}
					</h2>
					<p className="checkout-email-text">
						Check your email for more information
					</p>
					<p className="checkout-info-text">
						If you have any questions, please write to us:{" "}
						<span className="checkout-span">contact@mernstore.com</span>
					</p>
					<Link to="/products">
						<button className="checkout-btn">Continue Shopping</button>
					</Link>
				</div>
			</div>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default CheckoutInfo;
