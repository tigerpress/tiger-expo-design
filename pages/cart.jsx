import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineTrash } from "react-icons/hi";
import Button from "../components/button";
import Container from "../components/container";
import Checkbox from "../components/forms/checkbox";
import Input from "../components/forms/input";
import PaymentForm from "../components/forms/payment-form";
import IconButton from "../components/icon-button";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";
import { useCart } from "../context/cart-context";
import { currency } from "../lib/utils";

export default function CartPage() {
	const {
		cartItems,
		removeFromCart,
		cartTotalPrice,
		increaseItemQuantity,
		decreaseItemQuantity,
		wipeCart,
	} = useCart();

	const {
		register,
		formState: { errors },
	} = useForm();

	return (
		<Section>
			<Container>
				<Title level="h1">Shopping Cart</Title>

				{cartItems.length === 0 && (
					<div className="mt-32 flex flex-col items-center justify-center gap-6">
						<p className="text-xl font-bold">
							Oh no! You don&apos;t have anything in your cart yet!
						</p>
						<Button href="/products" as="a">
							Shop Now
						</Button>
					</div>
				)}

				{cartItems.length > 0 && (
					<div className="mt-12 w-full bg-white p-8">
						<table className="mt-6 w-full table-auto">
							<thead>
								<tr className="even:bg-gray-200">
									<th className="hidden p-2 text-left md:table-cell">Item No.</th>
									<th className="p-2 text-left">Item</th>
									<th className="p-2 text-right">Price/EA</th>
									<th className="p-2 text-center">Qty</th>
									<th className="p-2 text-center">Del</th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((cartItem) => (
									<React.Fragment key={cartItem.id}>
										<tr className="even:bg-gray-200">
											<td className="hidden p-2 text-left font-semibold md:table-cell">
												{cartItem.id}
											</td>
											<td className="p-2 text-left font-semibold">{cartItem.description}</td>
											<td className="p-2 text-right font-semibold">
												{currency.format(cartItem.price)}
											</td>
											<td className="p-2 text-right font-semibold">
												<div className="whitespace-nowrap">
													<button
														className="border border-gray-900 border-opacity-10 px-2 text-lg text-gray-700"
														onClick={() => decreaseItemQuantity(cartItem)}
													>
														-
													</button>
													<span className="mx-2">{cartItem.quantity}</span>
													<button
														className="border border-gray-900 border-opacity-10 px-2 text-lg text-gray-700"
														onClick={() => increaseItemQuantity(cartItem)}
													>
														+
													</button>
												</div>
											</td>
											<td className="p-2 text-center">
												<IconButton
													variant="ghost"
													size="sm"
													icon={HiOutlineTrash}
													onClick={() => removeFromCart(cartItem)}
												/>
											</td>
										</tr>
										{cartItem?.upgrades.map((upgrade) => (
											<tr key={upgrade.id} className="even:bg-gray-200">
												<td className="hidden p-2 text-left md:table-cell">{upgrade.id}</td>
												<td className="p-2 text-left">{upgrade.description}</td>
												<td className="p-2 text-right">{currency.format(upgrade.price)}</td>
												<td className="p-2 text-right"></td>
												<td className="p-2 text-right"></td>
											</tr>
										))}
									</React.Fragment>
								))}
							</tbody>
						</table>
						<p className="mt-4 w-full text-right text-xl font-bold">
							Order total: {currency.format(cartTotalPrice)}
						</p>
						<div className="mt-12 flex justify-end gap-4">
							<Button variant="ghost" onClick={wipeCart}>
								Clear cart
							</Button>
							<Link href="/checkout" passHref>
								<Button as="a">Check out</Button>
							</Link>
						</div>
					</div>
				)}
			</Container>
		</Section>
	);
}
