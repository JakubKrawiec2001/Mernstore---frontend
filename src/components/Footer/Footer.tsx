import React from "react";
import "./Footer.scss";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import payment from "../../assets/images/payment.png";
import downloadApp from "../../assets/images/download.png";

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="wrapper">
				<div className="footer-newsletter-container">
					<p className="footer-newsletter-text">
						<BsFillSendFill className="footer-newsletter-icon"></BsFillSendFill>Sign Up For Newsletter
					</p>
					<div className="footer-input-box">
						<p className="footer-input-text">
							Get 30% discount on your next purchase
						</p>
						<div className="footer-input-bg">
							<input
								type="text"
								className="footer-input"
								placeholder="Enter Your Email Address"
							/>
							<button className="footer-btn">Subscribe</button>
						</div>
					</div>
				</div>
				<div className="footer-line"></div>
				<div className="footer-body">
					<div className="footer-item">
						<p className="footer-item-heading">Contact Us</p>
						<p className="footer-item-text">
							502 New Design Str, Melbourne, San Francisco, CA 94110, United
							States Of America​ Australia
						</p>
						<p className="footer-item-text">Phone: +01 123-123-123</p>
						<p className="footer-item-text">E-mail: mernstore@gmail.com</p>
					</div>
					<div className="footer-item">
						<p className="footer-item-heading">Information</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>About Us
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Contact Us
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Term & Condition
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Return Policy
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Shipping Return
						</p>
					</div>
					<div className="footer-item">
						<p className="footer-item-heading">Account</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Your Account
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Return Center
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Purchase
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>App Download
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Policy
						</p>
					</div>
					<div className="footer-item">
						<p className="footer-item-heading">Services</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>App Download
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Our Work
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Return Center
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Account
						</p>
						<p className="footer-item-text">
							<IoMdArrowDropright className="footer-icon"></IoMdArrowDropright>Terms
						</p>
					</div>
					<div className="footer-item">
						<p className="footer-item-heading">Our App</p>
						<p className="footer-item-text">
							Download Our Apps And Get Extra 15% Discount On Your First Order!
						</p>
						<img src={downloadApp} alt="download app"  className="footer-download-img"/>
					</div>
				</div>
				<div className="footer-line"></div>
				<div className="footer-copyright-container">
					<p className="footer-copyright-text">© 2023 Mernstore - Electronic Essential</p>
					<img src={payment} alt="Payment options" className="footer-payment-img"/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
