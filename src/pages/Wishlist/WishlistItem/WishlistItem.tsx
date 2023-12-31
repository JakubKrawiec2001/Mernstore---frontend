import React, { useContext } from "react";
import { Props } from "../../../types/types";
import { Link } from "react-router-dom";
import { SelectedProductContext } from "../../../context/selectedProductContext";
import { IoIosCloseCircle } from "react-icons/io";
import "./WishlistItem.scss";

const WishlistItem = (props: Props) => {
	const { _id, name, category, price, images, bestseller, sale } =
		props.product;
	const { addToCart, removeFromWishList } = useContext(SelectedProductContext);

	return (
		<div className="wishlist-item-container" key={_id}>
			<IoIosCloseCircle
				className="wishlist-item-close-icon"
				onClick={() => removeFromWishList(_id)}
			/>
			{bestseller && <p className="wishlist-item-bestseller">Bestseller</p>}
			<Link to={`/details/${_id}`} className="wishlist-item-img-box">
				<img src={images[0]} alt={name} className="wishlist-item-img" />
			</Link>
			<Link to={`/details/${_id}`} className="wishlist-item-text-box">
				<p className="wishlist-item-category">{category}</p>
				<p className="wishlist-item-name">{name}</p>
				{sale ? (
					<div className="wishlist-item-sale-price-box">
						<p className="wishlist-item-price">${price.toFixed(2)}</p>
						<p className="wishlist-item-price">
							${(Number(price) - Number(price) * 0.2).toFixed(0)}
						</p>
					</div>
				) : (
					<p className="wishlist-item-price">${price.toFixed(2)}</p>
				)}
			</Link>
			<button className="wishlist-item-btn" onClick={() => addToCart(_id)}>
				Add To Cart
			</button>
		</div>
	);
};

export default WishlistItem;
