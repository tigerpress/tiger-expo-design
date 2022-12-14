import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const CartContext = createContext({});

const useCart = () => {
	return useContext(CartContext);
};

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useLocalStorage("cart", []);

	let cartQuantity = useMemo(() => {
		return cartItems.reduce((quantity, item) => parseInt(item.quantity) + quantity, 0);
	}, [cartItems]);

	const itemTotalPrice = (item) => {
		let itemPrice = parseFloat(item.price) * parseFloat(item.quantity);
		let upgradesPrice =
			item.upgrades.reduce((a, c) => a + parseFloat(c.price), 0) * parseFloat(item.quantity);
		return itemPrice + upgradesPrice;
	};

	const cartTotalPrice = cartItems.reduce((a, c) => a + itemTotalPrice(c), 0) ?? 0;

	const increaseItemQuantity = (item) => {
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
	};

	const decreaseItemQuantity = (item) => {
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
	};

	const removeFromCart = (item) => {
		setCartItems((cartItems) => cartItems.filter((cartItem) => cartItem.id !== item.id));
	};

	const clearCart = () => {
		setCartItems([]);
	};

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

export { useCart, CartProvider };
