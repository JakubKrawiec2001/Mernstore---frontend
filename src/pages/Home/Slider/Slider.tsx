import React from "react";
import "./Slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoriesData } from "../../../data/categoriesData";
import { Link } from "react-router-dom";

const Slider = () => {
	const responsive: {} = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 2000 },
			items: 8,
		},
		desktop: {
			breakpoint: { max: 1920, min: 1200 },
			items: 8,
		},
		tablet: {
			breakpoint: { max: 1100, min: 768 },
			items: 5,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			items: 3,
		},
	};

	return (
		<div className="wrapper">
			<Carousel responsive={responsive} showDots={false} arrows={false}>
				{categoriesData.map((category) => {
					return (
						<Link
							to={`/products?category=${category.name}&color=`}
							className="slider-item"
							key={category.id}>
							<div className="slider-bg">
								<img
									src={category.img}
									alt={category.name}
									className="slider-img"
								/>
							</div>
							<p className="slider-text">{category.name}</p>
						</Link>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Slider;
