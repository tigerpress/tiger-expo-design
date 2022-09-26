import Link from "next/link";

export default function Header() {
	return (
		<header className="border-t-8 border-t-amber-700">
			<Link href="/">
				<span>TigerExpoDesign</span>
			</Link>
		</header>
	);
}
