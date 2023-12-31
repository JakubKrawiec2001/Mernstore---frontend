import React, { useContext, useState } from "react";
import { ProductType, ShopType } from "../../types/types";
import { useGetProducts } from "../../hooks/useGetProducts";
import { SelectedProductContext } from "../../context/selectedProductContext";
import Delivery from "../../components/Delivery/Delivery";
import Footer from "../../components/Footer/Footer";
import "./Wishlist.scss";
import WishlistItem from "./WishlistItem/WishlistItem";
import Heading from "../../components/Heading/Heading";

const Wishlist = () => {
	const { getFavouriteProduct, favouriteProduct } = useContext<ShopType>(
		SelectedProductContext
	);
	const { products } = useGetProducts();

	return (
		<>
			<Heading title="Your Wishlist"></Heading>
			<div className="wishlist-container wrapper">
				{products.map((product: ProductType) => {
					if (getFavouriteProduct(product._id) !== 0) {
						return <WishlistItem product={product}></WishlistItem>;
					}
				})}
				{Object.keys(favouriteProduct).length === 0 && (
					<p className="no-items-wishlist-text">No items in wishlist</p>
				)}
			</div>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default Wishlist;
