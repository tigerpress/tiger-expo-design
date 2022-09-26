import { SWRConfig } from "swr";
import AppShell from "../components/AppShell";
import { fetcher } from "../lib/fetcher";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		// <SWRConfig
		// 	value={{
		// 		fetcher,
		// 	}}
		// >
		<AppShell>
			<Component {...pageProps} />
		</AppShell>
		// </SWRConfig>
	);
}

export default MyApp;
