import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import Container from "../components/container";
import Checkbox from "../components/forms/checkbox";
import Input from "../components/forms/input";
import PaymentForm from "../components/forms/payment-form";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import Title from "../components/title";
import { useLocalStorage } from "../hooks/use-local-storage";

export default function CheckoutPage() {
	const {
		register,
		formState: { errors },
	} = useForm();
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
									Your payments are securely processed through PayTrace
								</Paragraph>
							</div>
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
										<td className="p-2 pl-8">{cart.option.id}</td>
										<td className="p-2 pl-8">{cart.option.description}</td>
										<td className="p-2 pl-8">{cart.option.price}</td>
									</tr>
									{cart.upgrades?.map((upgrade) => {
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
