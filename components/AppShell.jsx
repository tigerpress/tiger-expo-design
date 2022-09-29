import Header from "./Header";

export default function AppShell({ children }) {
	return (
		<>
			<Header />
			<main className="container mx-auto mt-16">{children}</main>
		</>
	);
}
