import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineTrash } from "react-icons/hi";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { Section } from "../components/section";
import { Title } from "../components/title";
import { useCart } from "../context/cart-context";
import { currency } from "../lib/utils";

const CartPage = () => {
	const {
		cartItems,
		removeFromCart,
		cartTotalPrice,
		increaseItemQuantity,
		decreaseItemQuantity,
		clearCart,
	} = useCart();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		formState: { errors },
	} = useForm();

	const estimateData = {
		pr: 100407,
		lotsno: 1,
		esPt: 1,
		"project-title": "Tradeshow Booth",
		finishedsizeheight: 5,
		finishedsizewidth: 5,
		outside: true,
		quantity1: 1,
		quantityStaticOrder: 1,
		buyoutquantity: 1,
		buyout: cartTotalPrice,
		priceForced: cartTotalPrice,
		shippingCost: 0,
		buyoutvendorname: "web",
		vendorQuote: "web",
		buyoutdescription: JSON.stringify(cartItems)
			.replace(/[\{\}\"]/g, "")
			.replace(/[,\[\]]/g, "\n"),
	};

	const createEstimate = async (e) => {
		try {
			setLoading(true);
			const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/estimate/add", {
				method: "POST",
				headers: {
					authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_HEADER}`,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(estimateData),
			});

			const { estimate } = await response.json();
			setLoading(false);

			if (response.ok) {
				router.push(`/checkout?id=${estimate}`);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

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
								<tr className="">
									<th className="hidden px-2 py-1 text-left md:table-cell">Item No.</th>
									<th className="px-2 py-1 text-left">Item</th>
									<th className="px-2 py-1 text-right">Price/EA</th>
									<th className="px-2 py-1 text-center">Qty</th>
									<th className="px-2 py-1 text-center">Del</th>
								</tr>
							</thead>
							{cartItems.map((cartItem) => (
								<tbody key={cartItem.id} className="border-t">
									<tr>
										<td className="hidden px-2 py-1 text-left font-semibold md:table-cell">
											{cartItem.id}
										</td>
										<td className="px-2 py-1 text-left font-semibold">{cartItem.name}</td>
										<td className="px-2 py-1 text-right font-semibold">
											{currency.format(cartItem.price)}
										</td>
										<td className="px-2 py-1 text-right font-semibold">
											<div className="whitespace-nowrap">
												<button
													className="rounded-md border bg-indigo-100 px-2 text-lg transition-colors hover:bg-indigo-200 disabled:bg-gray-200"
													onClick={() => decreaseItemQuantity(cartItem)}
													disabled={cartItem.quantity === 1}
												>
													-
												</button>
												<span className="mx-2">{cartItem.quantity}</span>
												<button
													className="rounded-md border bg-indigo-100 px-2 text-lg transition-colors hover:bg-indigo-200 disabled:bg-gray-200"
													onClick={() => increaseItemQuantity(cartItem)}
												>
													+
												</button>
											</div>
										</td>
										<td className="px-2 py-1 text-center">
											<IconButton
												variant="ghost"
												size="sm"
												icon={HiOutlineTrash}
												onClick={() => removeFromCart(cartItem)}
											/>
										</td>
									</tr>
									{cartItem?.upgrades?.map((upgrade) => (
										<tr key={upgrade.id} className="text-gray-700">
											<td className="hidden px-2 py-1 text-left md:table-cell">{upgrade.id}</td>
											<td className="px-2 py-1 text-left">{upgrade.name}</td>
											<td className="px-2 py-1 text-right">{currency.format(upgrade.price)}</td>
											<td className="px-2 py-1 text-right"></td>
											<td className="px-2 py-1 text-right"></td>
										</tr>
									))}
								</tbody>
							))}
						</table>
						<p className="mt-4 w-full text-right text-xl font-bold">
							Order total: {currency.format(cartTotalPrice)}
						</p>
						<div className="mt-12 flex justify-end gap-4">
							<Button variant="ghost" onClick={clearCart}>
								Clear cart
							</Button>
							<Button onClick={createEstimate} isLoading={loading}>
								Check out
							</Button>
						</div>
					</div>
				)}
			</Container>
		</Section>
	);
};

export default CartPage;
