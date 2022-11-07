import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Container from "../components/container";
import Checkbox from "../components/forms/checkbox";
import Input from "../components/forms/input";
import PaymentForm from "../components/forms/payment-form";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";
import { useCart } from "../context/cart-context";
import { currency } from "../lib/utils";

export default function CheckoutPage() {
	const { cartItems, cartTotalPrice } = useCart();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });

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

	const onSubmit = async (e) => {
		try {
			const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/estimate/add", {
				method: "POST",
				headers: {
					authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_HEADER}`,
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(estimateData),
			});
			setLoading(false);
			console.log(response);

			if (response.ok) {
				setSuccess(true);
				router.push("/order-confirmation");
			}
		} catch (error) {
			setError(true);
			console.error(error);
		}
	};

	return (
		<Section>
			<Container>
				<Title level="h1">Checkout</Title>

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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mt-12 grid gap-8 lg:grid-cols-2">
							<div className="bg-white p-8">
								<Title level="h2">Billing Information</Title>
								<div className="flex gap-4">
									<Input name="firstName" label="First Name" {...register("firstName")} />
									<Input name="lastName" label="Last Name" {...register("lastName")} />
								</div>
								<Input type="email" name="email" label="email" {...register("email")} />
								<Input name="address1" label="Address 1" {...register("address1")} />
								<Input name="address2" label="Address 2" {...register("address2")} />
								<Input name="city" label="City" {...register("city")} />
								<div className="flex gap-4">
									<Input name="state" label="State" {...register("state")} />
									<Input
										name="zip"
										label="Zip"
										{...register("zip", {
											pattern: {
												value: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
												message: "Please enter a valid US zip code",
											},
										})}
										errors={errors}
									/>
								</div>
								<Checkbox
									name="bill-to"
									label="Billing address same as shipping?"
									{...register("billTo")}
								/>
								<div>
									<Title level="h2" className="mt-8">
										Payment
									</Title>
									<PaymentForm />
									<Paragraph className="text-sm text-gray-600">
										Your payments are securely processed through our PayTrace provider.
									</Paragraph>
								</div>
							</div>

							<div className="flex flex-col items-end gap-8">
								<div className="w-full py-8">
									<Title level="h2">Order Summary</Title>
									<table className="mt-6 w-full table-auto">
										<thead>
											<tr className="">
												<th className="hidden px-2 py-1 text-left md:table-cell">Item No.</th>
												<th className="px-2 py-1 text-left">Item</th>
												<th className="px-2 py-1 text-right">Price/EA</th>
												<th className="px-2 py-1 text-center">Qty</th>
											</tr>
										</thead>
										{cartItems.map((cartItem) => (
											<tbody key={cartItem.id} className="border-t">
												<tr>
													<td className="hidden px-2 py-1 text-left font-semibold md:table-cell">
														{cartItem.id}
													</td>
													<td className="px-2 py-1 text-left font-semibold">
														{cartItem.description}
													</td>
													<td className="px-2 py-1 text-right font-semibold">
														{currency.format(cartItem.price)}
													</td>
													<td className="px-2 py-1 text-right font-semibold">
														<span className="mx-1">{cartItem.quantity}</span>
													</td>
												</tr>
												{cartItem?.upgrades?.map((upgrade) => (
													<tr key={upgrade.id} className="text-gray-700">
														<td className="hidden px-2 py-1 text-left md:table-cell">
															{upgrade.id}
														</td>
														<td className="px-2 py-1 text-left">{upgrade.description}</td>
														<td className="px-2 py-1 text-right">
															{currency.format(upgrade.price)}
														</td>
														<td className="px-2 py-1 text-right"></td>
														<td className="px-2 py-1 text-right"></td>
													</tr>
												))}
											</tbody>
										))}
									</table>
									<div>
										<p className="mt-4 w-full text-right font-medium">
											Subtotal: {currency.format(cartTotalPrice)}
										</p>
										<p className="w-full text-right font-medium">
											Tax: {currency.format(cartTotalPrice * 0.0625)}
										</p>
										<p className="w-full text-right font-medium">
											Ground shipping: {currency.format(75)}
										</p>
										<p className="mt-2 w-full text-right text-xl font-bold">
											Order total: {currency.format(cartTotalPrice + cartTotalPrice * 0.0625 + 75)}
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<Button variant="ghost" href="/cart" as="a">
										Return to cart
									</Button>
									<Button isLoading={loading} isSuccess={success}>
										Buy now
									</Button>
								</div>
							</div>
						</div>
					</form>
				)}
			</Container>
		</Section>
	);
}
