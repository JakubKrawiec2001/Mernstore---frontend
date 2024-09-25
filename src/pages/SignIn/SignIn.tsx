import React, { useState } from "react";
import "../Auth.scss";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosError } from "axios";
import { UserErrors } from "../../errors";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

const SignIn = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "https://mernstore-backend.onrender.com/user/login",
        {
          username,
          password,
        }
      );
      setCookies("access_token", result.data.token);
      localStorage.setItem("userID", result.data.userID);
      navigate("/");
      toast.success("Login successful");
    } catch (err) {
      let errorMessage: string = "";
      if (err instanceof AxiosError) {
        switch (err?.response?.data?.type) {
          case UserErrors.NO_USER_FOUND:
            errorMessage = "User doesn't exist";
            break;
          case UserErrors.WRONG_CREDENTIALS:
            errorMessage = "Wrong username or password";
            break;
          default:
            errorMessage = "Somethin went wrong";
        }

        toast.error(errorMessage);
      }
    }
  };
  return (
    <div className="auth-container">
      <Link to="/">
        <AiOutlineClose className="auth-close"></AiOutlineClose>
      </Link>
      <div className="auth-body">
        <h2 className="auth-heading">Sign In</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" type="submit">
            Sign In
          </button>
        </form>

        <p className="auth-text">
          Don't have an account?{" "}
          <Link to="/sign-up" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
