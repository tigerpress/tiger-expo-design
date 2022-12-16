import { Menu, Transition } from "@headlessui/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { BiMenu } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/cart-context";
import productData from "../../data/products.json";
import { Container } from "../container";

const NavLink = ({ href, children }) => {
	const router = useRouter();
	const isSelected = router.asPath === href;

	return (
		<Link href={href}>
			<a className={clsx(isSelected && "active text-indigo-600", "underlined")}>{children}</a>
		</Link>
	);
};

const Header = ({ products }) => {
	const { cartQuantity } = useCart();

	return (
		<header className="py-8 font-bold">
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
										<span className="absolute top-0 right-0 grid aspect-square h-6 w-6 -translate-y-2 translate-x-2 place-items-center rounded-full bg-black text-center text-sm font-bold text-white">
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
							<Menu as="div" className="relative inline-block text-left">
								<div>
									<Menu.Button className="flex items-center">
										Resources
										<BsChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<Link href="/resources/art-requirements">
														<a
															className={clsx(
																active && "text-indigo-600",
																"block px-4 py-2 text-sm"
															)}
														>
															Art Requirements
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link href="/resources/tips">
														<a
															className={clsx(
																active && "text-indigo-600",
																"block px-4 py-2 text-sm"
															)}
														>
															Tips
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link href="/resources/faq">
														<a
															className={clsx(
																active && "text-indigo-600",
																"block px-4 py-2 text-sm"
															)}
														>
															FAQ
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link href="/resources/file-instructions">
														<a
															className={clsx(
																active && "text-indigo-600",
																"block px-4 py-2 text-sm"
															)}
														>
															File Instructions
														</a>
													</Link>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<Link href="/resources/terms">
														<a
															className={clsx(
																active && "text-indigo-600",
																"block px-4 py-2 text-sm"
															)}
														>
															Terms and Conditions
														</a>
													</Link>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
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
								<NavigationMenu.Content className="absolute right-0 z-50 mt-2 flex w-72 flex-col rounded-lg bg-white p-8 shadow-md">
									{products &&
										products.map((product) => (
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
};

export async function getStaticProps() {
	return {
		props: { products: productData },
		revalidate: 10,
	};
}

export { Header };
