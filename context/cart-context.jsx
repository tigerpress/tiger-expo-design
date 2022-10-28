import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const CartContext = createContext({});

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useLocalStorage("cart", []);
	const cartQuantity = cartItems.length
		? cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
		: 0;

	function getItemQuantity(id) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseItemQuantity(id) {
		setCartItems((currItems) => {
			if (!currItems.find((item) => item.id === id)) {
				return [...currItems, { id, quantity: 1 }];
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseItemQuantity(id) {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id) {
		setCartItems((currItems) => currItems.filter((item) => item.id !== id));
	}

	return (
		<CartContext.Provider
			value={{
				getItemQuantity,
				increaseItemQuantity,
				decreaseItemQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
