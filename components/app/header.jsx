import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/cart-context";
import products from "../../pages/api/products.json";
import Container from "../container";

const NavLink = ({ href, children }) => {
	const router = useRouter();
	const isSelected = router.asPath === href;

	return (
		<Link href={href}>
			<a className={clsx(isSelected && "active text-indigo-600", "underlined")}>{children}</a>
		</Link>
	);
};

export default function Header() {
	const { cartQuantity } = useCart();

	return (
		<header className="bg-yellow-300 py-8 font-bold">
			<Container className="flex items-center justify-between">
				<Link href="/">
					<a>
						<img src="/logo-primary.svg" alt="Tiger Expo Design" className="h-24" />
					</a>
				</Link>

				{/* DESKTOP MENU */}
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-8">
						{cartQuantity > 0 && (
							<li>
								<Link href="/cart">
									<a className="relative flex items-center gap-2 rounded-full bg-indigo-700 p-2 text-white transition-colors hover:bg-indigo-600">
										<HiOutlineShoppingCart className="inline text-xl" />
										<span className="absolute top-0 right-0 aspect-square h-6 w-6 -translate-y-2 translate-x-2 rounded-full bg-black text-center text-sm font-bold text-white">
											{cartQuantity}
										</span>
									</a>
								</Link>
							</li>
						)}
						<li>
							<NavLink href="/products">Products</NavLink>
						</li>
						<li>
							<NavLink href="/quote">Quote Request</NavLink>
						</li>
						<li>
							<NavLink href="/resources">Resources</NavLink>
						</li>
						<li>
							<NavLink href="/about">About</NavLink>
						</li>
						<li>
							<NavLink href="/contact">Contact</NavLink>
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
									<Link href="/checkout" passHref>
										<NavigationMenu.Link>Cart</NavigationMenu.Link>
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
