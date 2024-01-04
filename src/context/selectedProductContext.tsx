import { createContext, useEffect, useState } from "react";
import { ProductType, ShopType } from "../types/types";
import { toast } from "react-toastify";
import { useGetProducts } from "../hooks/useGetProducts";

const defaultValue: ShopType = {
	addToCart: () => null,
	addToWishlist: () => null,
	removeFromCart: () => null,
	removeAllFromCart: () => null,
	removeFromWishList: () => null,
	updateCartItemCount: () => null,
	favouriteProduct: [],
	cartItems: [],
	setCartItems: () => [],
	setTotalAmount: () => 0,
	setTotalNumberOfItems: () => 0,
	totalAmount: 0,
	totalNumberOfItems: 0,
	loading: false,
	setLoading: () => null,
};

export const SelectedProductContext = createContext<ShopType>(defaultValue);

export const SelectedProductContextProvider = (props) => {
	const { products } = useGetProducts();
	const [favouriteProduct, setFavouriteProduct] = useState(() => {
		const storedWishlist = localStorage.getItem("wishlist");
		return storedWishlist ? JSON.parse(storedWishlist) : [];
	});
	const [cartItems, setCartItems] = useState([]);
	const [totalAmount, setTotalAmount] = useState(0);
	const [totalNumberOfItems, setTotalNumberOfItems] = useState(() => {
		const storedTotalItems = localStorage.getItem("numberOfProducts");
		return storedTotalItems ? JSON.parse(storedTotalItems) : 0;
	});
	const [loading, setLoading] = useState(true);
	let updatedCart;

	const addToWishlist = (itemId: string) => {
		setFavouriteProduct((prevFavouriteProduct) => {
			if (prevFavouriteProduct.length !== 0) {
				return [...prevFavouriteProduct, itemId];
			} else {
				return [itemId];
			}
		});

		toast.success("Product successfully added to wishlist");
	};

	useEffect(() => {
		localStorage.setItem("wishlist", JSON.stringify(favouriteProduct));
	}, [favouriteProduct]);

	const removeFromWishList = (itemId: string) => {
		setFavouriteProduct((prevFavouriteProduct) => {
			const updatedWishlist = prevFavouriteProduct.filter(
				(item) => item !== itemId
			);
			return updatedWishlist;
		});
		toast.success("Product successfully removed from wishlist");
	};

	const addToCart = (itemId: string) => {
		const product = products.find((product) => product._id === itemId);
		const existingProductIndex = cartItems.findIndex(
			(item) => item._id === product._id
		);

		if (existingProductIndex !== -1) {
			updatedCart = [...cartItems];
			updatedCart[existingProductIndex].quantity += 1;
		} else {
			updatedCart = [...cartItems, { ...product, quantity: 1 }];
		}
		setCartItems(updatedCart);
		updateTotalValues(updatedCart);
		updateLocalStorage(updatedCart);
		toast.success("Product selected successfully");
	};

	const removeFromCart = (itemId: string) => {
		const product = cartItems.find((product) => product._id === itemId);
		const existingProductIndex = cartItems.findIndex(
			(item) => item._id === product._id
		);

		if (product.quantity > 1) {
			updatedCart = [...cartItems];
			updatedCart[existingProductIndex].quantity -= 1;
		} else {
			updatedCart = cartItems.filter((item) => item._id !== itemId);
		}
		setCartItems(updatedCart);
		updateTotalValues(updatedCart);
		updateLocalStorage(updatedCart);
	};

	const removeAllFromCart = (itemId: string) => {
		updatedCart = cartItems.filter((item) => item._id !== itemId);
		setCartItems(updatedCart);
		updateTotalValues(updatedCart);
		updateLocalStorage(updatedCart);
	};
	const calculateTotalItems = (cart: ProductType[]) => {
		return cart.reduce((total, product) => total + product.quantity, 0);
	};
	const calculateTotalPrice = (cart: ProductType[]) => {
		return cart.reduce(
			(total, product) => total + product.price * product.quantity,
			0
		);
	};
	const updateCartItemCount = (newAmount: number, itemId: string) => {
		if (newAmount < 0) {
			return;
		} else {
			updatedCart = cartItems.map((item) => {
				if (item._id === itemId) {
					return { ...item, quantity: newAmount };
				}

				return item;
			});
		}

		setCartItems(updatedCart);
		updateTotalValues(updatedCart);
		updateLocalStorage(updatedCart);
	};

	const updateTotalValues = (updatedCart) => {
		setTotalAmount(calculateTotalPrice(updatedCart));
		setTotalNumberOfItems(calculateTotalItems(updatedCart));
	};

	const updateLocalStorage = (updatedCart) => {
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		localStorage.setItem(
			"totalAmount",
			JSON.stringify(calculateTotalPrice(updatedCart))
		);
		localStorage.setItem(
			"numberOfProducts",
			JSON.stringify(calculateTotalItems(updatedCart))
		);
	};

	const contextValue: ShopType = {
		addToCart,
		addToWishlist,
		removeFromCart,
		updateCartItemCount,
		favouriteProduct,
		removeAllFromCart,
		removeFromWishList,
		cartItems,
		setCartItems,
		totalAmount,
		setTotalAmount,
		totalNumberOfItems,
		setTotalNumberOfItems,
		loading,
		setLoading,
	};
	return (
		<SelectedProductContext.Provider value={contextValue}>
			{props.children}
		</SelectedProductContext.Provider>
	);
};
