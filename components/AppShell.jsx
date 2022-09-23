import Header from "./Header";

export default function AppShell({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
