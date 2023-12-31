import React from "react";
import "./Categories.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoriesData } from "../../../data/categoriesData";
const Categories = (props: {
	categoryParam: string;
	setSearchParams: (string) => void;
}) => {
	const { categoryParam, setSearchParams } = props;

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
			items: 5.5,
		},
		mobile: {
			breakpoint: { max: 767, min: 0 },
			items: 2.5,
		},
	};
	return (
		<div className="wrapper">
			<Carousel
				responsive={responsive}
				showDots={false}
				arrows={false}
				className="category-container">
				{categoriesData.map((category) => {
					return (
						<div
							className={
								categoryParam === category.name
									? "category-item category-item-active"
									: "category-item"
							}
							key={category.id}
							onClick={() => {
								setSearchParams((prev) => {
									prev.set("category", category.name);
									return prev;
								});
							}}>
							<img src={category.img} alt="" className="category-img" />
							<p className="category-text">{category.name}</p>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Categories;
