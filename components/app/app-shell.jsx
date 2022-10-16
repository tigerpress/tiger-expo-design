import Footer from "./footer";
import Header from "./header";

export default function AppShell({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
