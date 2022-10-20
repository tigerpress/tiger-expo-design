import Image from "next/future/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Select from "../../components/forms/select";
import ProductCard from "../../components/product-card";
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
	const [selectedGrade, setSelectedGrade] = useState(0);
	const [selectedOption, setSelectedOption] = useState(0);
	const [selectedUpgrades, setSelectedUpgrades] = useState([]);
	const [loading, setLoading] = useState(false);

	const options = product.configs[selectedGrade].options;
	const upgrades = product.configs[selectedGrade].upgrades;
	const currentConfig = { ...options[selectedOption], selectedUpgrades };

	const upgradesPrice = selectedUpgrades
		.map((upgrade) => upgrade.price)
		.reduce((a, c) => a + parseFloat(c), 0);

	const subtotal = upgradesPrice + parseFloat(options[selectedOption].price);

	const relatedProducts = products
		.filter((relatedProduct) => relatedProduct.id !== product.id)
		.slice(0, 4);

	const estimateData = {
		pr: 100407,
		lotsno: 1,
		esPt: 1,
		"project-title": "Tradeshow Booth",
		finishedsizeheight: product.height,
		finishedsizewidth: product.width,
		outside: true,
		static: true,
		quantity1: "1",
		buyout: subtotal,
		priceForced: subtotal,
		buyoutquantity: 1,
		buyoutvendorname: "",
		vendorQuote: "web",
		buyoutdescription: JSON.stringify(currentConfig)
			.replace(/[\{\}\"]/g, "")
			.replace(/[,\[\]]/g, "\n"),
	};

	const handleUpgrades = (e) => {
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedUpgrades([
				...selectedUpgrades,
				upgrades.find((upgrade) => upgrade.id === e.target.value),
			]);
		}
		if (!isChecked) {
			setSelectedUpgrades(selectedUpgrades.filter((upgrade) => upgrade.id !== e.target.value));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
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
		const data = await response.json();
		console.log(data);
		setLoading(false);
	};

	return (
		<Container>
			{product && (
				<>
					<div className="mt-16 grid gap-4 lg:grid-cols-2">
						<div className="relative aspect-square w-96">
							<Image src={product.image} alt={product.name} fill />
						</div>
						<form className="grid gap-4" onSubmit={handleSubmit}>
							<h1 className="text-3xl font-bold">{product.name}</h1>
							<Select label="Grade" name="grade" onChange={(e) => setSelectedGrade(e.target.value)}>
								{product.configs.map((config, i) => (
									<option key={config.id} value={i}>
										{config.grade}
									</option>
								))}
							</Select>
							<label>
								<span className="block">Option</span>
								<select
									name="option"
									id="option"
									onChange={(e) => setSelectedOption(e.target.value)}
								>
									{options.map((option, i) => (
										<option key={option.id} value={i}>
											{option.description} - $ {option.price}
										</option>
									))}
								</select>
							</label>
							<fieldset>
								<legend>Addon Upgrades</legend>
								{upgrades.map((upgrade) => (
									<label htmlFor={upgrade.id} key={upgrade.id} className="block">
										<input
											type="checkbox"
											name={upgrade.id}
											id={upgrade.id}
											value={upgrade.id}
											onChange={handleUpgrades}
										/>
										<span className="ml-2">{upgrade.description}</span>
									</label>
								))}
							</fieldset>
							Price: {subtotal}
							<Button isLoading={loading}>Add to Cart</Button>
						</form>
					</div>
				</>
			)}
			<div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
					<div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Technical Specifications
						</h2>
						<p className="mt-4 text-gray-500">
							The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
							The powder coated steel divider separates active cards from new ones, or can be used
							to archive important task lists.
						</p>

						<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
							{features.map((feature) => (
								<div key={feature.name} className="border-t border-gray-200 pt-4">
									<dt className="font-medium text-gray-900">{feature.name}</dt>
									<dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
						<img
							src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
							alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
							className="rounded-lg bg-gray-100"
						/>
						<img
							src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
							alt="Top down view of walnut card tray with embedded magnets and card groove."
							className="rounded-lg bg-gray-100"
						/>
						<img
							src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
							alt="Side of walnut card tray with card groove and recessed card area."
							className="rounded-lg bg-gray-100"
						/>
						<img
							src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
							alt="Walnut card tray filled with cards and card angled in dedicated groove."
							className="rounded-lg bg-gray-100"
						/>
					</div>
				</div>
			</div>

			{relatedProducts && (
				<section className="my-16">
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
				</section>
			)}
		</Container>
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
