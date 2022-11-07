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
import ProductCard from "../../components/product-card";
import Section from "../../components/section";
import Title from "../../components/title";
import { useCart } from "../../context/cart-context";
import { currency } from "../../lib/utils";
import products from "../api/products.json";

const features = [
	{ name: "Origin", description: "Designed by Good Goods, Inc." },
	{
		name: "Material",
		description: "Solid walnut base with rare earth magnets and powder coated steel card cover",
	},
	{ name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
	{ name: "Finish", description: "Hand sanded and finished with natural oil" },
	{ name: "Includes", description: "Wood card tray and 3 refill packs" },
	{
		name: "Considerations",
		description: "Made from natural materials. Grain and color vary with each item.",
	},
];

export default function ProductPage({ product }) {
	const router = useRouter();
	const { increaseItemQuantity } = useCart();
	const {
		register,
		handleSubmit,
		watch,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			grade: product.configs[0].id,
			option: product.configs[0].options[0].id,
			upgrades: [],
			quantity: 1,
		},
		reValidateMode: "onChange",
	});

	const watchValues = watch();
	const formData = getValues();

	const grade = product.configs.find((config) => config.id === formData.grade);
	const config = {
		id: grade?.options.find((option) => option.id === formData.option)?.id,
		description: grade?.options.find((option) => option.id === formData.option)?.description,
		price: grade?.options.find((option) => option.id === formData.option)?.price,
		upgrades: grade?.upgrades.filter((upgrade) => formData.upgrades.includes(upgrade.id)),
		quantity: formData.quantity,
	};
	const price =
		(parseFloat(config?.price) + config.upgrades?.reduce((a, c) => a + parseFloat(c.price), 0)) *
		parseInt(config.quantity);

	useEffect(() => {
		setValue(
			"option",
			product.configs.find((config) => config.id === watchValues.grade).options[0].id
		);
		setValue("upgrades", []);
	}, [watchValues.grade]);

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
			<Section className="bg-white">
				<Container>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="relative bg-gray-100 shadow-vignette">
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="p-8 mix-blend-multiply"
							/>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Title level="h1" className="mb-12">
								{product.name}
							</Title>

							<Select name="grade" label="Grade" {...register("grade")}>
								{product.configs.map((config) => (
									<option key={config.id} value={config.id}>
										{config.grade}
									</option>
								))}
							</Select>

							<Select name="option" label="Option" {...register("option")}>
								{product.configs
									.find((config) => config.id === watchValues.grade)
									?.options.map((option) => (
										<option key={option.id} value={option.id}>
											{option.description}
										</option>
									))}
							</Select>

							<fieldset className="mt-3">
								<legend className="font-medium">Addon Upgrades</legend>
								{product.configs
									.find((config) => config.id === watchValues.grade)
									?.upgrades.map((upgrade, i) => (
										<Checkbox
											key={upgrade.id}
											name={"upgrades"}
											value={upgrade.id}
											label={upgrade.description}
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

			<Section>
				<Container>
					<div>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Technical Specifications
						</h2>
						<p className="mt-4 text-gray-700">
							The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
							The powder coated steel divider separates active cards from new ones, or can be used
							to archive important task lists.
						</p>

						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							{features.map((feature) => (
								<div key={feature.name} className="border-t border-gray-300 pt-4">
									<dt className="font-medium">{feature.name}</dt>
									<dd className="mt-2 text-sm text-gray-700">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</Container>
			</Section>

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
