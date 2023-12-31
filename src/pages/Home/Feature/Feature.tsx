import React from "react";
import "./Feature.scss";
import { feature } from "../../../data/featureData";
import { Link } from "react-router-dom";

const Feature = () => {
	return (
		<div className="wrapper f-container">
			{feature.map((item) => {
				return (
					<div className="f-item" key={item.id}>
						<div className="f-text-box">
							<p className="f-text">{item.name}</p>
							<p className="f-text">{item.desc}</p>
							<p className="f-price">From ${item.price}</p>
							<Link
								to={`/products?category=${item.category}&color=`}
								className="f-learn-more">
								Learn More
							</Link>
						</div>
						<img src={item.img} alt="Iphone" className="f-image" />
					</div>
				);
			})}
		</div>
	);
};

export default Feature;
