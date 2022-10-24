import { useEffect, useState } from "react";
import Button from "../components/button";
import Container from "../components/container";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";
import { useLocalStorage } from "../hooks/use-local-storage";

export default function CheckoutPage() {
	const [cart, setCart] = useState();

	useEffect(() => {
		if (typeof window !== undefined) {
			setCart(JSON.parse(window.localStorage.getItem("cart")));
		}
	}, []);

	return (
		<Section>
			<Container>
				<Title level="h1">Checkout</Title>

				{!cart && (
					<div className="mt-32 flex flex-col items-center justify-center gap-6">
						<Paragraph className="text-xl font-bold">
							Oh no! You don&apos;t have anything in your cart yet!
						</Paragraph>
						<Button href="/products">Shop Now</Button>
					</div>
				)}

				{cart && (
					<div className="mt-12 grid gap-8 lg:grid-cols-2">
						<div className="bg-white p-8">
							<Title level="h2">Contact Information</Title>
							<form action="">
								<div className="flex gap-4">
									<label htmlFor="first-name">
										<span className="mt-3 mb-1 block">First Name</span>
										<input type="text" name="first-name" className="w-full" />
									</label>
									<label htmlFor="last-name">
										<span className="mt-3 mb-1 block">Last Name</span>
										<input type="text" name="last-name" className="w-full" />
									</label>
								</div>
								<label htmlFor="email">
									<span className="mt-3 mb-1 block">Email Address</span>
									<input type="email" name="email" className="w-full" />
								</label>
								<label htmlFor="address">
									<span className="mt-3 mb-1 block">Address</span>
									<input type="email" name="address" className="w-full" />
								</label>
								<label htmlFor="address">
									<span className="mt-3 mb-1 block">City</span>
									<input type="text" name="address" className="w-full" />
								</label>
								<div className="flex gap-4">
									<label htmlFor="state">
										<span className="mt-3 mb-1 block">State</span>
										<input type="text" name="state" className="w-full" />
									</label>
									<label htmlFor="zip">
										<span className="mt-3 mb-1 block">Zip Code</span>
										<input type="text" name="zip" className="w-full" />
									</label>
								</div>
								<div className="mt-3">
									<label htmlFor="zip">
										<input type="checkbox" name="zip" />
										<span className="mb-1 ml-3">Shipping same as billing?</span>
									</label>
								</div>
							</form>
						</div>
						<div className="flex flex-col items-end gap-8">
							<div className="border-bg-gray-300 border bg-white p-8">
								<Title level="h2">Your Cart</Title>
								<table className="mt-6 table-auto">
									<tr className="even:bg-gray-200">
										<th className="p-2 pl-8">Item Number</th>
										<th className="p-2 pl-8">Description</th>
										<th className="p-2 pl-8">Price</th>
									</tr>
									<tr className="even:bg-gray-200">
										<td className="p-2 pl-8">{cart.id}</td>
										<td className="p-2 pl-8">{cart.description}</td>
										<td className="p-2 pl-8">{cart.price}</td>
									</tr>
									{cart.selectedUpgrades?.map((upgrade) => {
										return (
											<tr key={upgrade.id} className="even:bg-gray-200">
												<td className="p-2 pl-8">{upgrade.id}</td>
												<td className="p-2 pl-8">{upgrade.description}</td>
												<td className="p-2 pl-8">{upgrade.price}</td>
											</tr>
										);
									})}
								</table>
							</div>
							<div class="flex gap-4">
								<Button variant="ghost">Start Over</Button>
								<Button>Buy now</Button>
							</div>
						</div>
					</div>
				)}
			</Container>
		</Section>
	);
}
