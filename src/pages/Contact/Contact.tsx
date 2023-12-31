import React from "react";
import "./Contact.scss";
import Footer from "../../components/Footer/Footer";
import Delivery from "../../components/Delivery/Delivery";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Contact = () => {
	return (
		<>
			<div className="contact-container wrapper">
				<div className="contact-l">
					<h2 className="contact-heading">Location</h2>
					<p className="contact-text">28 Jackson Blvd Street 1020 New York</p>
					<div className="contact-socials-box">
						<h2 className="contact-heading">Follow Us</h2>
						<div className="socials-icons-box">
							<FaFacebook className="social-icon" />
							<AiFillTwitterCircle className="social-icon" />
							<AiFillInstagram className="social-icon" />
							<FaGooglePlus className="social-icon" />
						</div>
						<p className="contact-privacy">©2023 Privacy policy - MernStore</p>
					</div>
				</div>
				<div className="contact-r">
					<h2 className="contact-heading">Contact Form</h2>
					<form className="contact-form-box">
						<input
							type="text"
							className="contact-input"
							placeholder="Enter your name"
						/>
						<input
							type="text"
							className="contact-input"
							placeholder="Enter your email address"
						/>
						<textarea
							className="contact-textarea"
							placeholder="Enter your message"
						/>
						<button className="contact-form-btn">Submit</button>
					</form>
				</div>
			</div>
			<Delivery></Delivery>
			<Footer></Footer>
		</>
	);
};

export default Contact;
