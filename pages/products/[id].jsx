import Image from "next/future/image";
import { useEffect, useState } from "react";
import products from "../api/products.json";

export default function ProductPage({ product }) {
	const [config, setConfig] = useState(0);
	const [option, setOption] = useState(0);
	const [optionPrice, setOptionPrice] = useState(product.configs[config].options[option].price);
	const [upgradePrice, setUpgradePrice] = useState(0);

	const handleConfigChange = (e) => {
		setConfig(e.target.value);
		setOption(0);
		setOptionPrice(product.configs[e.target.value].options[0].price);
		setUpgradePrice(0);
	};

	const handleUpgradeChange = (e, i) => {
		setUpgradePrice((prevPrice) => {
			if (e.target.checked) {
				return (prevPrice += parseFloat(e.target.value));
			} else {
				return (prevPrice -= parseFloat(e.target.value));
			}
		});
	};

	return (
		<div>
			{product && (
				<div>
					<div className="relative aspect-square w-96">
						<Image src={product.image} alt={product.name} fill />
					</div>
					<h1>{product.name}</h1>
					<form>
						<div>
							<label htmlFor="budget">Budget</label>
							<select name="budget" id="budget" onChange={handleConfigChange}>
								{product.configs.map((config, i) => (
									<option key={config.id} value={i}>
										{config.grade}
									</option>
								))}
							</select>
							<label htmlFor="option">Option</label>
							<select name="option" id="option" onChange={(e) => setOption(e.target.value)}>
								{product.configs[config].options.map((option, i) => (
									<option key={option.id} value={i}>
										{option.description} - $ {option.price}
									</option>
								))}
							</select>
							<div>
								<h2>Addon Upgrades</h2>
								{product.configs[config].upgrades.map((upgrade, i) => (
									<div key={upgrade.id}>
										<input
											type="checkbox"
											name={upgrade.id}
											id={upgrade.id}
											value={upgrade.price}
											onChange={(e) => handleUpgradeChange(e, i)}
										/>
										<label htmlFor={upgrade.id}>{upgrade.description}</label>
									</div>
								))}
							</div>
						</div>
					</form>
					Subtotal: {optionPrice} - {upgradePrice}
				</div>
			)}
		</div>
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
