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
	quantity?: number;
};

export type ShopType = {
	addToCart: (itemId: string) => void;
	addToWishlist: (itemId: string) => void;
	removeFromCart: (itemId: string) => void;
	removeAllFromCart: (itemId: string) => void;
	removeFromWishList: (itemId: string) => void;
	updateCartItemCount: (newAmount: number, itemId: string) => void;
	favouriteProduct: string[];
	cartItems: ProductType[];
	setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
	totalAmount: number;
	setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
	totalNumberOfItems: number;
	setTotalNumberOfItems: React.Dispatch<React.SetStateAction<number>>;
	loading: boolean;
	setLoading: (boolean) => void;
};

export type Props = {
	product: ProductType;
};
