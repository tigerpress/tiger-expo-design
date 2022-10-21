import Button from "../components/button";
import Container from "../components/container";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";
import { useLocalStorage } from "../hooks/use-local-storage";

export default function CheckoutPage() {
	if (typeof window !== "undefined") {
		const cart = window.localStorage.getItem("cart");
	}

	return (
		<Section>
			<Container>
				<Title level="h1">Checkout</Title>
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
								{cart.selectedUpgrades.map((upgrade) => {
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
							<Button variant="ghost" size="sm">
								Start Over
							</Button>
							<Button size="sm">Proceed to Payment</Button>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}
