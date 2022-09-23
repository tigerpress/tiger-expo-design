import Link from "next/link";

export default function Header() {
	return (
		<header className="border-top">
			<Link href="/">
				<span>TigerExpoDesign</span>
			</Link>
		</header>
	);
}
