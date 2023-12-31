import React, { useContext } from "react";
import "./NewAndBestsellers.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductType } from "../../../types/types";
import { useGetProducts } from "../../../hooks/useGetProducts";
import { SelectedProductContext } from "../../../context/selectedProductContext";

const NewAndBestsellers = (props: { newOrBestseller: string }) => {
	const { products } = useGetProducts();
	const { addToCart, addToWishlist, favouriteProduct, removeFromWishList } =
		useContext(SelectedProductContext);

	return (
		<div className="nb-container wrapper">
			{products.map((product: ProductType) => {
				if (props.newOrBestseller === "bestsellers") {
					if (product.bestseller) {
						return (
							<div className="nb-item">
								<AiOutlineHeart
									className={
										product._id in favouriteProduct
											? "nb-heart nb-active-heart"
											: "nb-heart"
									}
									onClick={() =>
										product._id in favouriteProduct
											? removeFromWishList(product._id)
											: addToWishlist(product._id)
									}></AiOutlineHeart>
								<Link to={`/details/${product._id}`} className="nb-img-box">
									<img
										src={product.images[0]}
										alt={product.name}
										className="nb-img"
									/>
								</Link>
								<Link to={`/details/${product._id}`} className="nb-text-box">
									<p className="nb-category">{product.category}</p>
									<p className="nb-name">{product.name}</p>
									<p className="nb-price">${product.price.toFixed(2)}</p>
								</Link>
								<button
									className="nb-btn"
									onClick={() => addToCart(product._id)}>
									Add To Cart
								</button>
							</div>
						);
					}
				} else {
					if (product.new) {
						return (
							<Link to={`/details/${product._id}`} className="nb-item">
								<AiOutlineHeart
									className={
										product._id in favouriteProduct
											? "nb-heart nb-active-heart"
											: "nb-heart"
									}
									onClick={() =>
										product._id in favouriteProduct
											? removeFromWishList(product._id)
											: addToWishlist(product._id)
									}></AiOutlineHeart>
								<img
									src={product.images[0]}
									alt={product.name}
									className="nb-img"
								/>
								<div className="nb-text-box">
									<p className="nb-category">{product.category}</p>
									<p className="nb-name">{product.name}</p>
									<p className="nb-price">${product.price.toFixed(2)}</p>
								</div>
								<button
									className="nb-btn"
									onClick={() => addToCart(product._id)}>
									Add To Cart
								</button>
							</Link>
						);
					}
				}
			})}
		</div>
	);
};

export default NewAndBestsellers;
