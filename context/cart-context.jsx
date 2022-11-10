import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const CartContext = createContext({});

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useLocalStorage("cart", []);

	let cartQuantity = cartItems.reduce((quantity, item) => parseInt(item.quantity) + quantity, 0);

	const itemTotalPrice = (item) => {
		let itemPrice = parseFloat(item.price) * parseFloat(item.quantity);
		let upgradesPrice =
			item.upgrades.reduce((a, c) => a + parseFloat(c.price), 0) * parseFloat(item.quantity);
		return itemPrice + upgradesPrice;
	};

	const cartTotalPrice = cartItems.reduce((a, c) => a + itemTotalPrice(c), 0);

	function increaseItemQuantity(item) {
		setCartItems((cartItems) => {
			if (!cartItems || !cartItems.find((cartItem) => cartItem.id === item.id)) {
				return [...cartItems, item];
			} else {
				return cartItems.map((cartItem) => {
					if (cartItem.id === item.id) {
						return { ...cartItem, quantity: parseFloat(cartItem.quantity) + 1 };
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
				return;
			} else {
				return cartItems.map((cartItem) => {
					if (cartItem.id === item.id) {
						return { ...cartItem, quantity: parseFloat(cartItem.quantity) - 1 };
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

	function clearCart() {
		setCartItems([]);
	}

	return (
		<CartContext.Provider
			value={{
				increaseItemQuantity,
				decreaseItemQuantity,
				removeFromCart,
				cartItems,
				cartQuantity,
				itemTotalPrice,
				cartTotalPrice,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
