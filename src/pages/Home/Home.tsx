import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import Slider from "./Slider/Slider";
import Header from "./Header/Header";
import Feature from "./Feature/Feature";
import "./Home.scss";
import NewAndBestsellers from "./NewAndBestsellers/NewAndBestsellers";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";

const Home = () => {
	const [newOrBestseller, setNewOrBestseller] = useState<string>("bestsellers");
	return (
		<>
			<Header></Header>
			<Heading title="Trending Categories"></Heading>
			<Slider></Slider>
			<Feature></Feature>
			<Heading title="Trending Products"></Heading>
			<div className="home-links wrapper">
				<p
					className={
						newOrBestseller === "bestsellers"
							? "home-link active-home-link"
							: "home-link"
					}
					onClick={() => setNewOrBestseller("bestsellers")}>
					Bestsellers
				</p>
				<p
					className={
						newOrBestseller === "new"
							? "home-link active-home-link"
							: "home-link"
					}
					onClick={() => setNewOrBestseller("new")}>
					New Products
				</p>
			</div>
			<NewAndBestsellers newOrBestseller={newOrBestseller}></NewAndBestsellers>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default Home;
