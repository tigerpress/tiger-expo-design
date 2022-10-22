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
				{cart ? (
					<div className="grid lg:grid-cols-2">
						<div></div>
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
								<Button>Proceed to Payment</Button>
							</div>
						</div>
					</div>
				) : (
					<div className="mt-32 flex flex-col items-center justify-center gap-6">
						<Paragraph className="text-xl font-bold">
							Oh no! You don&apos;t have anything in your cart yet!
						</Paragraph>
						<Button href="/products">Shop Now</Button>
					</div>
				)}
			</Container>
		</Section>
	);
}
