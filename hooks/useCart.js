import { useEffect, useState } from "react";

export const useCart = () => {
	const getCart = () => {
		return window.localStorage.getItem("cart");
	};

	const addToCart = (formData) => {
		const data = Object.fromEntries(formData.entries());
		window.localStorage.setItem("cart", JSON.stringify(data));
	};

	useEffect(() => addToCart, []);

	return { getCart, addToCart };
};
