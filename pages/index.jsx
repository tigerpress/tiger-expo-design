import Image from "next/future/image";
import Link from "next/link";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Button from "../components/button";
import Container from "../components/container";
import ProductCard from "../components/product-card";
import Section from "../components/section";
import Title from "../components/title";
import products from "./api/products.json";

const features = [
	{
		name: "Competitive exchange rates",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: HiOutlineGlobeAlt,
	},
	{
		name: "No hidden fees",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: HiOutlineGlobeAlt,
	},
	{
		name: "Transfers are instant",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: HiOutlineGlobeAlt,
	},
	{
		name: "Mobile notifications",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: HiOutlineGlobeAlt,
	},
];

export default function Home({ products }) {
	return (
		<>
			<Section className="bg-yellow-300">
				<Container>
					<div className="grid items-center lg:grid-cols-12">
						<div className="col-span-full max-w-prose lg:col-span-5 lg:col-start-1">
							<Title level="h1">Set your brand apart from the crowd</Title>
							<p className="mt-4 mb-8 text-xl">
								Tiger Expo Design offers an extensive selection of tradeshow displays, such as
								banner stands, portable signs, light boxes, table throws, popup displays, outdoor
								displays and exhibit kits and accessories!
							</p>
							<Button as="a" size="md">
								Shop now
							</Button>
						</div>
						<div className="col-span-full row-start-1 lg:col-span-7 lg:col-start-6">
							<img src="hero-img.webp" />
						</div>
					</div>
				</Container>
			</Section>

			<Section className="bg-gray-100">
				<Container>
					<div className="lg:text-center">
						<Title level="h2">The easiest way to buy your next tradeshow display.</Title>
						<p className="mt-4 text-xl text-gray-800">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam.
						</p>
					</div>
					<div className="mt-10">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							{features.map((feature) => (
								<div key={feature.name} className="group relative">
									<dt>
										<div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors group-hover:bg-yellow-300">
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</div>
										<p className="ml-16 text-lg font-medium leading-6">{feature.name}</p>
									</dt>
									<dd className="mt-2 ml-16 text-base">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</Container>
			</Section>

			{products && (
				<Section>
					<Container>
						<Title level="h2">Our products</Title>
						<ul className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{products.map((product) => (
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

			<Section className="bg-white text-center">
				<Container>
					<Title level="h2">
						<span className="block">Ready to dive in?</span>
						<span className="block">Buy online or reach out for a custom quote.</span>
					</Title>
					<div className="mt-8 flex items-center justify-center gap-8">
						<Button variant="outline">Get a quote</Button>
						<Button>Shop now</Button>
					</div>
				</Container>
			</Section>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { products },
	};
}
