import React, { useContext, useState } from "react";
import "./SelectedProduct.scss";
import { MdOutlineEventAvailable, MdOutlinePinDrop } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import payments from "../../../assets/images/payments.png";
import { ProductType, ShopType } from "../../../types/types";
import { SelectedProductContext } from "../../../context/selectedProductContext";

const SelectedProduct = (props: { product: ProductType }) => {
	const { product } = props;
	const { addToCart, favouriteProduct, addToWishlist, removeFromWishList } =
		useContext<ShopType>(SelectedProductContext);
	const [slideNumber, setSlideNumber] = useState(0);
	const images = product.images;
	const handleMove = (direction: string) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};
	return (
		<div className="selected-product-container wrapper">
			<div className="selected-product-l">
				<div className="selected-product-main-image-box">
					<IoIosArrowBack
						className="main-image-arrow"
						onClick={() => handleMove("l")}
					/>
					<img
						src={product.images[slideNumber]}
						alt=""
						className="selected-product-main-image"
					/>
					<IoIosArrowForward
						className="main-image-arrow"
						onClick={() => handleMove("r")}
					/>
				</div>
				<div className="selected-product-images-box">
					{images.map((image, i) => {
						return (
							<img
								src={image}
								alt=""
								className={
									slideNumber === i
										? "selected-product-img-active selected-product-img"
										: "selected-product-img"
								}
								onClick={() => setSlideNumber(i)}
							/>
						);
					})}
				</div>
			</div>
			<div className="selected-product-m">
				<p className="selected-product-name">{product.name}</p>
				{product.bestseller && (
					<p className="selected-product-bestseller-text">bestseller</p>
				)}

				<p className="selected-product-desc">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
					numquam voluptate ullam commodi rem illum unde ratione ab, culpa
					corporis! Doloribus saepe perferendis nisi suscipit fugiat libero,
					exercitationem eius, deserunt asperiores tenetur esse atque
					consectetur minus sunt sequi reprehenderit voluptatibus molestiae rem
					dolorum accusantium pariatur reiciendis! Assumenda alias temporibus
					ducimus.
				</p>
				<button
					className={
						product._id in favouriteProduct
							? "selected-product-wishlist-btn selected-product-wishlist-active-btn"
							: "selected-product-wishlist-btn"
					}
					onClick={() =>
						product._id in favouriteProduct
							? removeFromWishList(product._id)
							: addToWishlist(product._id)
					}>
					<FaHeart className="selected-product-wishlist-icon" />{" "}
					{product._id in favouriteProduct
						? "Added To Wishlist"
						: "Add To Wishlist"}
				</button>
				<img src={payments} alt="" className="selected-product-payments-img" />
			</div>
			<div className="selected-product-r">
				<div className="selected-product-info">
					<p className="selected-product-info-item">
						<MdOutlineEventAvailable />
						Available
					</p>
					<p className="selected-product-info-item">
						<TbTruckDelivery />
						Delivery: $0
					</p>
					<p className="selected-product-info-item">
						<MdOutlinePinDrop />
						Check availability
					</p>
				</div>
				<div className="selected-product-price-box">
					<p className="selected-product-price">${product.price.toFixed(2)}</p>
					<p className="selected-product-price-text">Buy in installments:</p>
					<p className="selected-product-price">
						${(product.price / 4).toFixed(2)}
					</p>
					<p className="selected-product-price-text">
						*Free delivery with advance payment
					</p>
				</div>

				<button
					className="selected-product-btn"
					onClick={() => addToCart(product._id)}>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default SelectedProduct;
