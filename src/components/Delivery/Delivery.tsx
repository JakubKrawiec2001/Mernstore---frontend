import React from "react";
import "./Delivery.scss"
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineGift } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Delivery = () => {
	return (
		<div className="delivery-container wrapper">
			
				<div className="delivery-item">
					<TbTruckDelivery className="delivery-icon"></TbTruckDelivery>
					<p className="delivery-text"><span className="delivery-span">Free</span> home delivery</p>
				</div>
				<div className="delivery-item">
					<AiOutlineGift className="delivery-icon"></AiOutlineGift>
					<p className="delivery-text"><span className="delivery-span">Gift</span> Voucher In App</p>
				</div>
				<div className="delivery-item">
					<MdSupportAgent className="delivery-icon"></MdSupportAgent>
					<p className="delivery-text">24/7 online <span className="delivery-span">support</span></p>
				</div>
				<div className="delivery-item">
					<RiSecurePaymentLine className="delivery-icon"></RiSecurePaymentLine>
					<p className="delivery-text"><span className="delivery-span">Secure</span> payments</p>
				</div>
			
		</div>
	);
};

export default Delivery;
