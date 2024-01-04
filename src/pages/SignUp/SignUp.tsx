import React, { useState } from "react";
import "../Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AxiosError } from "axios";
import { UserErrors } from "../../errors";
import { toast } from "react-toastify";

const SignUp = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			await axios.post("https://mernstore-backend.onrender.com/user/register", {
				username,
				password,
			});
			navigate("/sign-in");
			toast.success("Registration completed");
		} catch (err) {
			if (err instanceof AxiosError) {
				if (err?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
					toast.error("USERNAME ALREADY EXISTS");
				} else {
					toast.error("SOMETHING WENT WRONG");
				}
			}
		}
	};

	return (
		<div className="auth-container">
			<Link to="/">
				<AiOutlineClose className="auth-close"></AiOutlineClose>
			</Link>
			<div className="auth-body">
				<h2 className="auth-heading">Sign Up</h2>
				<form className="auth-form" onSubmit={handleSubmit}>
					<input
						type="text"
						id="username"
						placeholder="Username"
						className="input"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>

					<input
						type="password"
						id="password"
						placeholder="Password"
						className="input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input
						type="password"
						id="password"
						placeholder="Confirm password"
						className="input"
					/>

					<button className="auth-btn" type="submit">
						Sign Up
					</button>
				</form>
				<p className="auth-text">
					Already have an account?{" "}
					<Link to="/sign-in" className="auth-link">
						Sign In
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
