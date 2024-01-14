import React, { useContext, useState } from "react";
import "./Products.scss";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import Categories from "./Categories/Categories";
import Sorting from "./Sorting/Sorting";
import Product from "./Product/Product";
import { useGetProducts } from "../../hooks/useGetProducts";
import { ProductType } from "../../types/types";
import { useSearchParams } from "react-router-dom";
import { SelectedProductContext } from "../../context/selectedProductContext";
import Loading from "../../components/Loading/Loading";
import { products } from "../../data/productsData";

const Products = () => {
	const [view, setView] = useState("vertical");
	const [sortOrder, setSortOrder] = useState<string>("");
	// const { products } = useGetProducts();
	const [searchParams, setSearchParams] = useSearchParams({
		category: "All",
		color: "",
	});
	const { loading, setLoading } = useContext(SelectedProductContext);

	const categoryParam = searchParams.get("category");
	const colorParam = searchParams.get("color");

	const sortedProducts = [...products].sort((a, b) => {
		let order = sortOrder === "lower" ? 1 : -1;

		if (sortOrder !== "") {
			order = order * (a.price - b.price);
		}
		return order;
	});
	let foundProduct = false;
	const productList = sortedProducts.map((product: ProductType) => {
		setLoading(false)
		if (
			(categoryParam === "All" || categoryParam === product.category) &&
			(colorParam === product.color || colorParam === "")
		) {
			foundProduct = true;
			return (
				<Product view={view} product={product} key={product._id}></Product>
			);
		} else if (
			categoryParam === "Bestsellers" &&
			product.bestseller &&
			(colorParam === product.color || colorParam === "")
		) {
			foundProduct = true;
			return (
				<Product view={view} product={product} key={product._id}></Product>
			);
		} else if (
			categoryParam === "Sale" &&
			product.sale &&
			(colorParam === product.color || colorParam === "")
		) {
			foundProduct = true;
			return (
				<Product view={view} product={product} key={product._id}></Product>
			);
		}

		return null;
	});

	if (!foundProduct) {
		productList.push(
			<p className="no-products-text">
				There are no products with the selected filter
			</p>
		);
	}

	return (
		<div>
			<Categories
				setSearchParams={setSearchParams}
				categoryParam={categoryParam}></Categories>
			<div className="products-container wrapper">
				<Sorting
					setView={setView}
					setSearchParams={setSearchParams}
					view={view}
					setSortOrder={setSortOrder}
					categoryParam={categoryParam}
					colorParam={colorParam}
					sortOrder={sortOrder}></Sorting>
				<div className="product-container">
					{!loading ? productList : <Loading></Loading>}
				</div>
			</div>
			<Delivery></Delivery>
			<Footer></Footer>
		</div>
	);
};

export default Products;
