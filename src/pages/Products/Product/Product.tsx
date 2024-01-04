import React, { useContext } from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import "./Product.scss";
import { Link } from "react-router-dom";
import { ProductType, ShopType } from "../../../types/types";
import { SelectedProductContext } from "../../../context/selectedProductContext";

const Product = (props: { view: string; product: ProductType }) => {
	const { view, product } = props;
	const { addToCart, addToWishlist, favouriteProduct, removeFromWishList } =
		useContext<ShopType>(SelectedProductContext);
	const isFavourite = favouriteProduct.includes(product._id);
	return (
		<div
			className={
				view === "vertical"
					? "product-item vertical"
					: "product-item horizontal"
			}
			key={product._id}>
			<AiOutlineHeart
				className={
					isFavourite ? "product-heart active-product-heart" : "product-heart"
				}
				onClick={() =>
					isFavourite
						? removeFromWishList(product._id)
						: addToWishlist(product._id)
				}></AiOutlineHeart>
			{product.bestseller && <p className="product-bestseller">Bestseller</p>}
			<Link to={`/details/${product._id}`} className="img-container">
				<img
					src={product.images[0]}
					alt={product.name}
					className="product-img"
				/>
			</Link>
			<Link to={`/details/${product._id}`} className="product-text-box">
				<p className="product-category">{product.category}</p>
				<p className="product-name">{product.name}</p>
				{product.sale ? (
					<div className="product-sale-price-box">
						<p className="product-price">${product.price.toFixed(2)}</p>
						<p className="product-price">
							$
							{(Number(product.price) - Number(product.price) * 0.2).toFixed(0)}
						</p>
					</div>
				) : (
					<p className="product-price">${product.price.toFixed(2)}</p>
				)}
			</Link>
			<button className="product-btn" onClick={() => addToCart(product._id)}>
				Add To Cart
			</button>
		</div>
	);
};

export default Product;
