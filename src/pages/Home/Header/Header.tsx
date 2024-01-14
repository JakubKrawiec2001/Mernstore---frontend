import React, { useContext } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import heroImg from "../../../assets/images/hero-1.png";
import heroImg2 from "../../../assets/images/hero-4.png";
import { SelectedProductContext } from "../../../context/selectedProductContext";
import { motion } from "framer-motion";

const Header = () => {
	const { addToCart } = useContext(SelectedProductContext);

	const imgVariants = {
		initial: {
			y: 300,
		},
		animate: {
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	const textVariants = {
		initial: {
			x: -300,
		},
		animate: {
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<div className="header">
			<div className="wrapper header-container">
				<motion.div
					className="header-l"
					variants={textVariants}
					initial="initial"
					animate="animate">
					<h1 className="header-heading">Electronic Essential</h1>
					<p className="header-text">New camera, new design</p>
					<p className="header-text">New Iphone 15 Pro Max</p>
					<p className="header-price">$1299.99</p>
					<div className="buttons-container">
						<Button path="/cart" title="Shop Now" function={addToCart}></Button>
						<Link
							to="/details/65675453824fc0e289e8b177"
							className="header-link">
							Learn More
						</Link>
					</div>
				</motion.div>
				<div className="header-r">
					<motion.img
						src={heroImg}
						alt=""
						className="header-img"
						variants={imgVariants}
						initial="initial"
						animate="animate"
					/>
					<motion.img
						src={heroImg2}
						alt=""
						className="header-img-two"
						variants={imgVariants}
						initial="initial"
						animate="animate"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
