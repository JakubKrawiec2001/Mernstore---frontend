import phone from "../assets/images/hero-4.png";
import watch from "../assets/images/smart-watch.png";
import speaker from "../assets/images/speakers.png";
import earphones from "../assets/images/earphones.png";
import headphones from "../assets/images/headphones.png";
import laptop from "../assets/images/laptop.png";

export const feature: {
	id: number;
	img: any;
	name: string;
	desc: string;
	price: string;
	category: string
}[] = [
	{
		id: 1,
		name: "Iphone 15 Pro",
		desc: "Love The Price.",
		price: "999.00",
		category: "Phones",
		img: phone,
	},
	{
		id: 2,
		name: "Apple Watch 7",
		desc: "Light On Price.",
		price: "399.00",
		category: "Smart watches",
		img: watch,
	},
	{
		id: 3,
		name: "Apple Home Pod",
		desc: "New Design.",
		price: "599.00",
		category: "Speakers",
		img: speaker,
	},
	{
		id: 4,
		name: "5th Generation",
		desc: "Air Pods.",
		price: "400.00",
		category: "Earphones",
		img: earphones,
	},
	{
		id: 5,
		name: "Headset Max",
		desc: "3rd Generation.",
		price: "550.00",
		category: "Headphones",
		img: headphones,
	},
	{
		id: 6,
		name: "Mac Book Pro",
		desc: "New Arrival.",
		price: "3500.00",
		category: "Laptops",
		img: laptop,
	},
];
