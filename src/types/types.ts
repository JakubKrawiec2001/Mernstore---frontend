export type ProductType = {
	_id: string;
	id: number;
	name: string;
	price: number;
	images: string[];
	bestseller: boolean;
	available: number;
	category: string;
	new: boolean;
	color: string;
	sale: boolean;
	quantity: number;
};

export type ShopType = {
	addToCart: (itemId: string) => void;
	addToWishlist: (itemId: string) => void;
	removeFromCart: (itemId: string) => void;
	removeAllFromCart: (itemId: string) => void;
	removeFromWishList: (itemId: string) => void;
	updateCartItemCount: (newAmount: number, itemId: string) => void;
	getFavouriteProduct: (itemId: string) => number;
	favouriteProduct: {};
	cartItems: ProductType[];
	setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
	totalAmount: number;
	totalNumberOfItems: number;
	loading: boolean;
	setLoading: (boolean) => void;
};

export type Props = {
	product: ProductType;
};
