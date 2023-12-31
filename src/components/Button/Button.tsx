import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
interface Props {
	function?: (itemId: string) => void;
	title: string;
	path: string;
}

const Button = (props: Props) => {
	const { title, path } = props;
	const itemId = "65675453824fc0e289e8b177";
	return (
		<Link to={path} className="button" onClick={() => props.function(itemId)}>
			{title}
		</Link>
	);
};

export default Button;
