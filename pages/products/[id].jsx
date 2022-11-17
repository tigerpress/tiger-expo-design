import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Container from "../../components/container";
import Checkbox from "../../components/forms/checkbox";
import Input from "../../components/forms/input";
import Select from "../../components/forms/select";
import Paragraph from "../../components/paragraph";
import ProductCard from "../../components/product-card";
import Section from "../../components/section";
import Title from "../../components/title";
import { useCart } from "../../context/cart-context";
import { currency } from "../../lib/utils";
import products from "../api/products.json";

export default function ProductPage({ product }) {
	const router = useRouter();
	const { increaseItemQuantity } = useCart();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			budget: product.configs[0].id,
			option: product.configs[0].options[0].id,
			upgrades: [],
			quantity: 1,
		},
		reValidateMode: "onChange",
	});

	const formValues = watch();
	const currentGrade =
		product.configs.find((config) => config.id === formValues.budget) ?? product.configs[0];
	const currentOption =
		currentGrade?.options.find((option) => option.id === formValues.option) ??
		product.configs[0].options[0];

	const config = {
		id: currentOption?.id,
		name: currentOption?.name,
		price: currentOption?.price,
		upgrades: currentGrade?.upgrades.filter((upgrade) => formValues.upgrades.includes(upgrade.id)),
		quantity: formValues.quantity,
	};

	const price =
		(parseFloat(config?.price) + config.upgrades?.reduce((a, c) => a + parseFloat(c.price), 0)) *
		parseInt(config.quantity);

	useEffect(() => {
		setValue(
			"option",
			product.configs.find((config) => config.id === formValues.budget)?.options[0].id
		);
		setValue("upgrades", []);
	}, [formValues.budget]);

	const onSubmit = (e) => {
		increaseItemQuantity(config);
		router.push("/cart");
	};

	// filter out the current product and render the other items, up to a max of 4 to fit UI
	const relatedProducts = products
		.filter((relatedProduct) => relatedProduct.id !== product.id)
		.slice(0, 4);

	return (
		<>
			<Section>
				<Container>
					<Title level="h1">{product.name}</Title>
					<div className="mt-8 grid items-start gap-4 lg:mt-12 lg:grid-cols-12">
						<div className="relative aspect-3/2 bg-gray-100 shadow-vignette lg:col-start-1 lg:col-end-11 lg:row-start-1">
							<Image
								src={`/${currentOption.id}.webp`}
								alt={product.name}
								fill
								className="object-cover"
							/>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="z-10 rounded-lg bg-white p-8 shadow-xl lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:mt-20"
						>
							<Paragraph>{product.description}</Paragraph>
							<Select name="budget" label="Budget" {...register("budget")}>
								{product.configs.map((config) => (
									<option key={config.id} value={config.id}>
										{config.budget}
									</option>
								))}
							</Select>

							<Select name="option" label="Option" {...register("option")}>
								{currentGrade?.options.map((option) => (
									<option key={option.id} value={option.id}>
										{option.name}
									</option>
								))}
							</Select>

							<fieldset className="mt-3">
								<legend className="font-medium">Addon Upgrades</legend>
								{currentGrade?.upgrades.map((upgrade, i) => (
									<Checkbox
										key={upgrade.id}
										name={"upgrades"}
										value={upgrade.id}
										label={upgrade.name}
										{...register("upgrades")}
									/>
								))}
							</fieldset>

							<Input
								type="number"
								name="quantity"
								label="Quantity of Kits"
								{...register("quantity")}
								min="1"
							/>

							<div className="mt-12 flex items-center justify-between">
								<span className="text-2xl font-bold">Subtotal: {currency.format(price)}</span>
								<Button>Add to cart</Button>
							</div>
						</form>
					</div>
				</Container>
			</Section>

			{currentOption && (
				<Section>
					<Container>
						<div>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Product Specifications
							</h2>
							<p className="mt-4 text-gray-700">{currentOption.description}</p>
							<dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
								{Object.keys(currentOption.specifications).map((key) => (
									<div key={key} className="border-t border-gray-300 pt-4">
										<dt className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}</dt>
										<dd className="mt-2 text-sm text-gray-700">
											{currentOption.specifications[key]}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</Container>
				</Section>
			)}

			{relatedProducts && (
				<Section className="bg-white">
					<Container>
						<h2 className="mb-8 text-3xl font-bold">Customers also viewed</h2>
						<ul className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
							{relatedProducts.map((product) => (
								<li key={product.id}>
									<Link href={`/products/${product.id}`}>
										<a>
											<ProductCard product={product} />
										</a>
									</Link>
								</li>
							))}
						</ul>
					</Container>
				</Section>
			)}
		</>
	);
}

export async function getStaticPaths() {
	const paths = products.map((product) => ({ params: { id: product.id } }));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const product = products.find((product) => product.id === params.id);
	return {
		props: { product },
	};
}
