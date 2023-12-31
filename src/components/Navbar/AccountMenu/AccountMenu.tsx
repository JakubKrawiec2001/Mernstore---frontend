import React, { useContext } from "react";
import "./AccountMenu.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SelectedProductContext } from "../../../context/selectedProductContext";
import { useCookies } from "react-cookie";

const AccountMenu = () => {
	const [cookies, setCookies] = useCookies(["access_token"]);

	const logout = () => {
		localStorage.clear();
		setCookies("access_token", null);
		toast.success("Signed out successfully");
	};

	return (
		<div className="account-container">
			{cookies.access_token ? (
				<button className="account-btn" onClick={logout}>
					Logout
				</button>
			) : (
				<>
					<Link to="/sign-in" className="account-btn">
						Sign In
					</Link>
					<p className="account-text">or</p>
					<Link to="/sign-up" className="account-btn sign-up">
						Sign Up
					</Link>
				</>
			)}
		</div>
	);
};

export default AccountMenu;
