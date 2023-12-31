import React, { useContext } from "react";
import { ProductType } from "../../../types/types";
import { SelectedProductContext } from "../../../context/selectedProductContext";
import "./CartItem.scss";

interface Props {
	product: ProductType;
}

const CartItem = (props: Props) => {
	const { _id, name, price, images, quantity } = props.product;
	const { addToCart, removeFromCart, removeAllFromCart, updateCartItemCount } =
		useContext(SelectedProductContext);

	return (
		<div className="cart-item-container">
			<div className="cart-item-l">
				<img src={images[0]} alt={name} className="cart-item-img" />
				<p className="cart-item-name">{name}</p>
			</div>
			<div className="cart-item-r">
				<p className="cart-item-price">${price.toFixed(2)}</p>
				<div className="cart-item-count">
					<button
						onClick={() => removeFromCart(_id)}
						className="cart-item-count-btn">
						-
					</button>

					<input
						value={quantity}
						className="cart-item-input"
						onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
					/>

					<button
						onClick={() => addToCart(_id)}
						className="cart-item-count-btn">
						+
					</button>
				</div>
				<button
					className="cart-item-remove-btn"
					onClick={() => removeAllFromCart(_id)}>
					X
				</button>
			</div>
		</div>
	);
};

export default CartItem;
