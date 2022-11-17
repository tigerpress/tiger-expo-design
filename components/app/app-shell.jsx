import { Footer } from "./footer";
import { Header } from "./header";

const AppShell = ({ children }) => {
	return (
		<div className="flex min-h-full flex-col">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
};

export { AppShell };
