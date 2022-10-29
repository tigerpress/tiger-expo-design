import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const CartContext = createContext({});

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useLocalStorage("cart", []);

	let cartQuantity = cartItems.reduce((quantity, item) => parseInt(item.quantity) + quantity, 0);

	const cartTotalPrice = () => {
		let individualUpgradesCost = cartItems.map((cartItem) =>
			cartItem.upgrades.reduce((a, c) => a + parseFloat(c.price), 0)
		);
		let allUpgradesCost = individualUpgradesCost.reduce((a, c) => a + c, 0);
		let itemCost = cartItems.reduce((a, c) => a + parseFloat(c.price), 0);
		return allUpgradesCost + itemCost;
	};

	function increaseItemQuantity(item) {
		setCartItems((cartItems) => {
			if (!cartItems || !cartItems.find((cartItem) => cartItem.id === item.id)) {
				return [...cartItems, item];
			} else {
				return cartItems.map((cartItem) => {
					if (cartItem.id === item.id) {
						return { ...cartItem, quantity: cartItem.quantity + 1 };
					} else {
						return cartItem;
					}
				});
			}
		});
	}

	function decreaseItemQuantity(item) {
		setCartItems((cartItems) => {
			if (cartItems.find((cartItem) => cartItem.id === item.id)?.quantity === 1) {
				return cartItems.filter((cartItem) => cartItem.id !== item.id);
			} else {
				return cartItems.map((cartItem) => {
					if (cartItem.id === item.id) {
						return { ...cartItem, quantity: cartItem.quantity - 1 };
					} else {
						return cartItem;
					}
				});
			}
		});
	}

	function removeFromCart(item) {
		setCartItems((cartItems) => cartItems.filter((cartItem) => cartItem.id !== item.id));
	}

	return (
		<CartContext.Provider
			value={{
				increaseItemQuantity,
				decreaseItemQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				cartTotalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
