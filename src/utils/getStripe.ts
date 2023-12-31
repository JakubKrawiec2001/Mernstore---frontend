import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

export const getStripe = () => {
	if (!stripePromise) {
		stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
	}
	console.log(stripePromise);
	return stripePromise;
};
