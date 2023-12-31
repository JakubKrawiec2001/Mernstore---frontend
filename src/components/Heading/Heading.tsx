import React from "react";
import "./Heading.scss";

const Heading = (props: { title: string }) => {
	return (
		<div className="wrapper heading-container">
			<div className="heading-box">
				<div className="line"></div>
				<p className="heading">{props.title}</p>
			</div>
			<div className="underline"></div>
		</div>
	);
};

export default Heading;
