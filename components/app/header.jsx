import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import products from "../../pages/api/products.json";
import Container from "../container";

export default function Header() {
	return (
		<header className="text-radix-gray-900 h-32 bg-radix-yellow-9 py-8 font-bold">
			<Container className="flex items-center justify-between">
				<Link href="/">
					<a>
						<img src="/logo-primary.svg" alt="Tiger Expo Design" className="h-24" />
					</a>
				</Link>

				{/* DESKTOP MENU */}
				<nav className="hidden lg:block">
					<ul className="flex gap-8">
						<li>
							<Link href="/">Products</Link>
						</li>
						<li>
							<Link href="/">Quote Request</Link>
						</li>
						<li>
							<Link href="/resources">Resources</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				{/* MOBILE MENU */}
				<div className="block lg:hidden">
					<NavigationMenu.Root orientation="vertical">
						<NavigationMenu.List>
							<NavigationMenu.Item>
								<NavigationMenu.Trigger>
									<BiMenu className="text-5xl" />
								</NavigationMenu.Trigger>
								<NavigationMenu.Content className="absolute right-0 z-50 mt-2 flex w-72 flex-col rounded-lg p-8 shadow-md">
									{products.map((product) => (
										<Link href={`/products/${product.id}`} passHref key={product.id}>
											<NavigationMenu.Link>{product.name}</NavigationMenu.Link>
										</Link>
									))}
									<Separator.Root className="my-4 h-[1px] bg-white opacity-50" />
									<Link href="/" passHref>
										<NavigationMenu.Link>Quote Request</NavigationMenu.Link>
									</Link>
									<Link href="/resources/art-requirements" passHref>
										<NavigationMenu.Link>Artwork Requirements</NavigationMenu.Link>
									</Link>
									<Link href="/resources/file-instructions" passHref>
										<NavigationMenu.Link>File Instructions</NavigationMenu.Link>
									</Link>
									<Link href="/resources/tips" passHref>
										<NavigationMenu.Link>Tips and Tricks</NavigationMenu.Link>
									</Link>
									<Link href="/resources/terms" passHref>
										<NavigationMenu.Link>Terms and Conditions</NavigationMenu.Link>
									</Link>
									<Link href="/resources/faq" passHref>
										<NavigationMenu.Link>FAQ</NavigationMenu.Link>
									</Link>
									<Separator.Root className="my-4 h-[1px] bg-white opacity-50" />
									<Link href="/about" passHref>
										<NavigationMenu.Link>About</NavigationMenu.Link>
									</Link>
									<Link href="/contact" passHref>
										<NavigationMenu.Link>Contact</NavigationMenu.Link>
									</Link>
								</NavigationMenu.Content>
							</NavigationMenu.Item>
						</NavigationMenu.List>
					</NavigationMenu.Root>
				</div>
			</Container>
		</header>
	);
}
