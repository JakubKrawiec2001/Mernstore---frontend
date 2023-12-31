import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import {
	AiOutlineHeart,
	AiOutlineShoppingCart,
	AiOutlineSearch,
	AiOutlineClose,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import AccountMenu from "./AccountMenu/AccountMenu";
import { SelectedProductContext } from "../../context/selectedProductContext";
import { useGetProducts } from "../../hooks/useGetProducts";
import { toast } from "react-toastify";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [openAccountMenu, setOpenAccountMenu] = useState(false);
	const [searchedProduct, setSearchedProduct] = useState("");
	const { totalNumberOfItems } = useContext(SelectedProductContext);
	const { products } = useGetProducts();
	const navigate = useNavigate();

	const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchedProduct(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (!searchedProduct) return;
		const foundProduct = products.find((item) =>
			item.name.toLowerCase().includes(searchedProduct.toLowerCase())
		);

		const foundProductCat = products.find((item) =>
			item.category.toLowerCase().includes(searchedProduct.toLowerCase())
		);

		if (foundProduct) {
			navigate(`details/${foundProduct._id}`);
		} else if (foundProductCat) {
			navigate(`/products?category=${foundProductCat.category}&color=`);
		} else if (!foundProduct && !foundProductCat) {
			toast.warning("The specified product was not found");
			navigate("/products");
		}
	};

	return (
		<div className="navbar" onMouseLeave={() => setOpenAccountMenu(false)}>
			{openAccountMenu && <AccountMenu></AccountMenu>}

			{open && <div className="shadow"></div>}
			<div className="wrapper navbar-container">
				<div className="navbar-up">
					<div className="navbar-l">
						<NavLink to="/contact" className="navbar-text">
							Contact
						</NavLink>
						<NavLink to="/stores" className="navbar-text">
							Our Stores
						</NavLink>
						<Link to="/products?category=Sale&color=" className="navbar-text">
							Visit Hot Products
						</Link>
					</div>
					<div className="navbar-r">
						<p
							className="navbar-text"
							onMouseEnter={() => setOpenAccountMenu(true)}>
							<MdAccountCircle className="navbar-text-icon"></MdAccountCircle>My
							Account
						</p>
						<NavLink to="/wishlist" className="navbar-text">
							<AiOutlineHeart className="navbar-text-icon"></AiOutlineHeart>
							Wishlist
						</NavLink>
						<NavLink to="/cart" className="navbar-text">
							<AiOutlineShoppingCart className="navbar-text-icon"></AiOutlineShoppingCart>
							Cart <span className="cart-span">{totalNumberOfItems}</span>
						</NavLink>
					</div>
				</div>

				<div className="navbar-down">
					<div className="navbar-l">
						<button
							className="menu-btn"
							onClick={() => (open ? setOpen(false) : setOpen(true))}>
							<FiMenu></FiMenu>
						</button>
						<Link to="/" className="logo">
							MERN <span className="logo-span">Store</span>
						</Link>
						<NavLink to="/" className="navbar-text">
							Home
						</NavLink>
						<NavLink to="/products" className="navbar-text">
							Shop
						</NavLink>
						<Link
							to="/products?category=Bestsellers&color="
							className="navbar-text">
							Bestsellers
						</Link>
						<Link to="/products?category=Sale&color=" className="navbar-text">
							Sale Products
						</Link>
					</div>
					<div className="navbar-mobile-items">
						<Link to="/" className="navbar-mobile-icon">
							<MdAccountCircle
								onClick={() =>
									setOpenAccountMenu((prev) => !prev)
								}></MdAccountCircle>
						</Link>
						<Link to="/wishlist" className="navbar-mobile-icon">
							<AiOutlineHeart></AiOutlineHeart>
						</Link>
						<Link to="/cart" className="navbar-mobile-icon">
							<AiOutlineShoppingCart></AiOutlineShoppingCart>
							<span className="cart-span">{totalNumberOfItems}</span>
						</Link>
					</div>
					<div className="navbar-r">
						<form onSubmit={handleSearch} className="search-container">
							<input
								type="text"
								placeholder="Search products..."
								name="search"
								className="search-input"
								value={searchedProduct}
								onChange={handleChangeSearchInput}
							/>
							<button type="submit" className="search-btn">
								<AiOutlineSearch></AiOutlineSearch>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className={!open ? "mobile-menu" : "mobile-menu open"}>
				<AiOutlineClose
					className="close-icon"
					onClick={() => setOpen(false)}></AiOutlineClose>
				<Link to="/" className="mobile-menu-text">
					Home
				</Link>
				<Link to="/products" className="mobile-menu-text">
					Shop
				</Link>
				<Link
					to="/products?category=Bestsellers&color="
					className="mobile-menu-text">
					Bestsellers
				</Link>
				<Link to="/products?category=Sale&color=" className="mobile-menu-text">
					Sale Products
				</Link>
				<Link to="/contact" className="mobile-menu-text">
					Contact
				</Link>
				<Link to="/stores" className="mobile-menu-text">
					Our Stores
				</Link>
				<Link to="/products?category=Sale&color=" className="mobile-menu-text">
					Visit Hot Products
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
