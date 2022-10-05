import Image from "next/future/image";
import { useRef, useState } from "react";
import Button from "../../components/button";
import Select from "../../components/forms/select";
import products from "../api/products.json";

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
		<div>
			{product && (
				<>
					<div className="grid gap-4 lg:grid-cols-2">
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
							<Button isLoading={loading}>Submit</Button>
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
