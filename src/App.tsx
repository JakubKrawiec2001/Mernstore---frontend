import "./App.scss";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Details from "./pages/Details/Details";
import ScrollToTop from "./utils/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Stores from "./pages/Stores/Stores";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import CheckoutInfo from "./pages/CheckoutInfo/CheckoutInfo";
import { SelectedProductContextProvider } from "./context/selectedProductContext";
import { useCookies } from "react-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
	const [cookies, _] = useCookies(["access_token"]);

	return (
		<div className="App">
			<ToastContainer position="bottom-left"></ToastContainer>
			<Router>
				<ScrollToTop></ScrollToTop>
				<SelectedProductContextProvider>
					<Navbar></Navbar>
					<Routes>
						<Route path="/" element={<Home></Home>}></Route>
						<Route
							path="/sign-in"
							element={
								cookies.access_token ? (
									<Navigate to="/"></Navigate>
								) : (
									<SignIn></SignIn>
								)
							}></Route>
						<Route
							path="/sign-up"
							element={
								cookies.access_token ? (
									<Navigate to="/"></Navigate>
								) : (
									<SignUp></SignUp>
								)
							}></Route>
						<Route path="/products" element={<Products></Products>}></Route>
						<Route path="/details/:id" element={<Details></Details>}></Route>
						<Route path="/contact" element={<Contact></Contact>}></Route>
						<Route path="/stores" element={<Stores></Stores>}></Route>
						<Route
							path="/wishlist"
							element={
								cookies.access_token ? (
									<Wishlist></Wishlist>
								) : (
									<Navigate to="/sign-in"></Navigate>
								)
							}></Route>
						<Route
							path="/cart"
							element={
								cookies.access_token ? (
									<Cart></Cart>
								) : (
									<Navigate to="/sign-in"></Navigate>
								)
							}></Route>
						<Route
							path="/checkout-info-success"
							element={<CheckoutInfo></CheckoutInfo>}></Route>
						<Route
							path="/checkout-info-cancel"
							element={<CheckoutInfo></CheckoutInfo>}></Route>
					</Routes>
				</SelectedProductContextProvider>
			</Router>
		</div>
	);
}

export default App;
