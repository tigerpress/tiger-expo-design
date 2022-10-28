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

export default function CheckoutPage() {
	const { cartItems, removeFromCart } = useCart();

	const {
		register,
		formState: { errors },
	} = useForm();

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
					<div className="mt-12 grid gap-8 lg:grid-cols-2">
						<div className="bg-white p-8">
							<Title level="h2">Contact Information</Title>
							<form action="">
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
									<Input name="zip" label="Zip" {...register("zip")} />
								</div>
								<Checkbox
									name="bill-to"
									label="Billing address same as shipping?"
									{...register("billTo")}
								/>
							</form>
							<div>
								<Title level="h2" className="mt-8">
									Billing Information
								</Title>
								<PaymentForm />
								<Paragraph className="text-sm text-gray-600">
									Your payments are securely processed through our PayTrace provider.
								</Paragraph>
							</div>
						</div>
						<div className="flex flex-col items-end gap-8">
							<div className="w-full bg-white p-8">
								<Title level="h2">Your Cart</Title>
								<table className="mt-6 w-full table-auto">
									<thead>
										<tr className="even:bg-gray-200">
											<th className="hidden p-2 text-left md:table-cell">Item No.</th>
											<th className="p-2 text-left">Item</th>
											<th className="p-2 text-right">Price</th>
											<th className="p-2 text-right">Qty</th>
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
													<td className="p-2 text-right font-semibold">{cartItem.quantity}</td>
													<td className="p-2 text-center">
														<IconButton
															variant="ghost"
															size="sm"
															icon={HiOutlineTrash}
															onClick={() => removeFromCart(cartItem)}
														/>
													</td>
												</tr>
												{cartItem.upgrades.map((upgrade) => (
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
							</div>
							<div className="flex gap-4">
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
