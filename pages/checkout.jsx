import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Checkbox } from "../components/forms/checkbox";
import { Input } from "../components/forms/input";
import { PaymentForm } from "../components/forms/payment-form";
import { Select } from "../components/forms/select";
import { Paragraph } from "../components/paragraph";
import { Section } from "../components/section";
import { Title } from "../components/title";
import { useCart } from "../context/cart-context";
import { useDebouncedValue } from "../hooks/use-debounced-value";
import { useShippingCost } from "../hooks/use-shipping-cost";
import { useTax } from "../hooks/use-tax";
import { STATES } from "../lib/constants";
import { currency } from "../lib/utils";

const CheckoutPage = () => {
	const { cartItems, cartTotalPrice, clearCart } = useCart();
	const [processing, setProcessing] = useState(false);
	const [retry, setRetry] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [paymentError, setPaymentError] = useState(false);
	const [clientKey, setClientKey] = useState("");
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({ mode: "onBlur" });
	const formData = watch();
	const { tax } = useTax(formData.state);
	const { shippingCost } = useShippingCost(router.query.id, useDebouncedValue(formData.zip, 1000));

	const handlePayment = async () => {
		try {
			return Promise.resolve("Payment Success!");
		} catch (error) {
			setPaymentError(error.message);
			return Promise.reject(error);
		}
	};

	const addJob = async () => {
		try {
			if (paymentError) {
				throw new Error("An error occurred during payment processing, please try again.");
			}
			// const response = await fetch("", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 		authorization: "",
			// 	},
			// 	body: { jobData },
			// });
			// return await response.json();
			console.log("job added");
		} catch (error) {
			setError(error.message);
			return Promise.reject(error);
		}
	};

	const onSubmit = async () => {
		await handlePayment();

		if (!paymentError) {
			await addJob();
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
								<Input type="email" name="email" label="Email" {...register("email")} />
								<Input name="address" label="Address" {...register("address1")} />
								<div className="gap-4 md:flex">
									<Input name="city" label="City" {...register("city")} />
									<Select name="state" label="State" {...register("state")}>
										{Object.entries(STATES).map(([key, value]) => (
											<option value={key} key={key}>
												{value}
											</option>
										))}
									</Select>
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
													<td className="px-2 py-1 text-left font-semibold">{cartItem.name}</td>
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
														<td className="px-2 py-1 text-left">{upgrade.name}</td>
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
											Tax: {isNaN(tax) ? currency.format(0) : currency.format(cartTotalPrice * tax)}
										</p>
										<p className="w-full text-right font-medium">
											Ground shipping: {currency.format(parseFloat(shippingCost))}
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
									<Button isLoading={processing} isSuccess={success}>
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
};

export default CheckoutPage;
