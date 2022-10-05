import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";
import AppShell from "../components/app/app-shell";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AppShell>
			<Component {...pageProps} />
		</AppShell>
	);
}

export default MyApp;
