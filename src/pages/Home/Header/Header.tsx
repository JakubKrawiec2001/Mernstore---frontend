import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import heroImg from "../../../assets/images/hero-1.png";
import heroImg2 from "../../../assets/images/hero-4.png";
import { SelectedProductContext } from "../../../context/selectedProductContext";

const Header = () => {
	const { addToCart } = useContext(SelectedProductContext);
	return (
		<div className="header">
			<div className="wrapper header-container">
				<div className="header-l">
					<h1 className="header-heading">Electronic Essential</h1>
					<p className="header-text">New camera, new design</p>
					<p className="header-text">New Iphone 15 Pro Max</p>
					<p className="header-price">$1299.99</p>
					<div className="buttons-container">
						<Button path="/cart" title="Buy Now" function={addToCart}></Button>
						<Link
							to="/details/65675453824fc0e289e8b177"
							className="header-link">
							Learn More
						</Link>
					</div>
				</div>
				<div className="header-r">
					<img src={heroImg} alt="" className="header-img" />
					<img src={heroImg2} alt="" className="header-img-two" />
				</div>
			</div>
		</div>
	);
};

export default Header;
