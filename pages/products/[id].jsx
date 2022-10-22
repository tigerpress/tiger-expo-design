import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Select from "../../components/forms/select";
import ProductCard from "../../components/product-card";
import Section from "../../components/section";
import Title from "../../components/title";
import { useLocalStorage } from "../../hooks/use-local-storage";
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
	const [loading, setLoading] = useState(false);
	const [cart, setCart] = useLocalStorage("cart", null);
	const [{ options, upgrades }, setSelectedGrade] = useState(product.configs[0]);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [selectedUpgrades, setSelectedUpgrades] = useState([]);

	const handleGradeChange = (e) => {
		setSelectedGrade(product.configs.find((config) => config.id === e.target.value));
		setSelectedOption(options[0]);
		setSelectedUpgrades([]);
	};

	const handleOptionChange = (e) =>
		setSelectedOption(options.find((option) => option.id === e.target.value));

	const handleUpgradeChange = (e) => {
		if (e.target.checked) {
			setSelectedUpgrades([
				...selectedUpgrades,
				upgrades.find((upgrade) => upgrade.id === e.target.value),
			]);
		}

		if (!e.target.checked) {
			setSelectedUpgrades(selectedUpgrades.filter((upgrade) => upgrade.id !== e.target.value));
		}
	};

	const price =
		selectedUpgrades?.map((upgrade) => upgrade.price).reduce((a, c) => a + parseFloat(c), 0) +
		parseFloat(selectedOption.price);

	// const estimateData = {
	// 	pr: 100407,
	// 	lotsno: 1,
	// 	esPt: 1,
	// 	"project-title": "Tradeshow Booth",
	// 	finishedsizeheight: product.height,
	// 	finishedsizewidth: product.width,
	// 	outside: true,
	// 	static: true,
	// 	quantity1: "1",
	// 	buyout: price,
	// 	priceForced: price,
	// 	buyoutquantity: 1,
	// 	buyoutvendorname: "",
	// 	vendorQuote: "web",
	// buyoutdescription: JSON.stringify(currentConfig)
	// 	.replace(/[\{\}\"]/g, "")
	// 	.replace(/[,\[\]]/g, "\n"),
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

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
				setCart(currentConfig);
				router.push("/checkout");
			}
		} catch (error) {
			console.error(error);
		}
	};

	// filter out the current product and render the other items, up to a max of 4 to fit UI
	const relatedProducts = products
		.filter((relatedProduct) => relatedProduct.id !== product.id)
		.slice(0, 4);

	return (
		<>
			<Section className="bg-white">
				<Container>
					<div className="grid gap-4 lg:grid-cols-2">
						<div className="relative aspect-square">
							<Image src={product.image} alt={product.name} fill />
						</div>
						<form className="grid gap-4" onSubmit={handleSubmit}>
							<Title level="h1">{product.name}</Title>
							<Select label="Grade" name="grade" onChange={handleGradeChange}>
								{product.configs.map((config) => (
									<option key={config.id} value={config.id}>
										{config.grade}
									</option>
								))}
							</Select>
							<Select label="Option" name="option" onChange={handleOptionChange}>
								{options.map((option) => (
									<option key={option.id} value={option.id}>
										{option.description}
									</option>
								))}
							</Select>
							<fieldset>
								<legend>Addon Upgrades</legend>
								{upgrades.map((upgrade) => (
									<label htmlFor={upgrade.id} key={upgrade.id} className="block">
										<input
											type="checkbox"
											name={upgrade.id}
											id={upgrade.id}
											value={upgrade.id}
											onChange={handleUpgradeChange}
										/>
										<span className="ml-2">{upgrade.description}</span>
									</label>
								))}
							</fieldset>
							<div className="flex items-center justify-between">
								<span className="text-2xl font-bold text-indigo-600">
									Total Cost: {currency.format(price)}
								</span>
								<Button isLoading={loading} loadingMessage="submitting">
									Proceed to Checkout
								</Button>
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
