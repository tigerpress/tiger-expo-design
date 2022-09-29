import Image from "next/future/image";
import { useRef, useState } from "react";
import products from "../api/products.json";

export default function ProductPage({ product }) {
	const [selectedGrade, setSelectedGrade] = useState(0);
	const [selectedOption, setSelectedOption] = useState(0);
	const [selectedUpgrades, setSelectedUpgrades] = useState([]);
	const options = product.configs[selectedGrade].options;
	const upgrades = product.configs[selectedGrade].upgrades;

	const upgradesPrice = selectedUpgrades
		.map((upgrade) => upgrades[upgrade])
		.reduce((a, c) => a + +c.price, 0);

	const subtotal = upgradesPrice + +product.configs[selectedGrade].options[selectedOption].price;

	const handleUpgrades = (e) => {
		const isChecked = e.target.checked;

		if (isChecked) {
			setSelectedUpgrades([...selectedUpgrades, e.target.value]);
		}
		if (!isChecked) {
			setSelectedUpgrades(
				selectedUpgrades.filter((_, i) => selectedUpgrades[i] !== e.target.value)
			);
		}
	};

	return (
		<div>
			{product && (
				<>
					<div className="grid gap-4 lg:grid-cols-2">
						<div className="relative aspect-square w-96">
							<Image src={product.image} alt={product.name} fill />
						</div>
						<form className="grid gap-4">
							<h1 className="text-3xl font-bold">{product.name}</h1>
							<label htmlFor="grade">
								<span className="block">Grade</span>
								<select name="grade" id="grade" onChange={(e) => setSelectedGrade(e.target.value)}>
									{product.configs.map((config, i) => (
										<option key={config.id} value={i}>
											{config.grade}
										</option>
									))}
								</select>
							</label>
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
								{upgrades.map((upgrade, i) => (
									<label htmlFor={upgrade.id} key={upgrade.id} className="block">
										<input
											type="checkbox"
											name={upgrade.id}
											id={upgrade.id}
											value={i}
											onChange={handleUpgrades}
										/>
										<span className="ml-2">{upgrade.description}</span>
									</label>
								))}
							</fieldset>
							<button className="bg-slate-900 text-white">Add to Cart</button>
							Price: {subtotal}
						</form>
					</div>
				</>
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
