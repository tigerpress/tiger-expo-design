import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import { AppShell } from "../components/app/app-shell";
import { CartProvider } from "../context/cart-context";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<CartProvider>
			<AppShell>
				<Component {...pageProps} />
			</AppShell>
		</CartProvider>
	);
};

export default MyApp;
