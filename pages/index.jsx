import Image from "next/future/image";
import Link from "next/link";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Button from "../components/button";
import Container from "../components/container";
import ProductCard from "../components/product-card";
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
			<div className=" bg-radix-yellow-9 py-16 text-radix-violet-12 lg:py-24">
				<Container>
					<div className="grid items-center lg:grid-cols-12">
						<div className="col-span-full max-w-prose lg:col-span-5 lg:col-start-1">
							<h1 className="font text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
								Set your brand apart from the crowd
							</h1>
							<p className="mt-4 mb-8 text-xl">
								Tiger Expo Design offers an extensive selection of tradeshow displays, such as
								banner stands, portable signs, light boxes, table throws, popup displays, outdoor
								displays and exhibit kits and accessories!
							</p>
							<Button as="a">Shop now</Button>
						</div>
						<div className="col-span-full row-start-1 lg:col-span-7 lg:col-start-6">
							<img src="hero-img.webp" />
						</div>
					</div>
				</Container>
			</div>

			<div className="bg-white py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-gray-900 mt-2 text-3xl font-bold uppercase leading-8 tracking-tight sm:text-4xl">
							The easiest way to buy your next tradeshow display.
						</h2>
						<p className="text-gray-500 mt-4 max-w-2xl text-xl lg:mx-auto">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							{features.map((feature) => (
								<div key={feature.name} className="relative">
									<dt>
										<div className="bg-orange-500 absolute flex h-12 w-12 items-center justify-center rounded-md text-white">
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</div>
										<p className="text-gray-900 ml-16 text-lg font-medium leading-6">
											{feature.name}
										</p>
									</dt>
									<dd className="text-gray-500 mt-2 ml-16 text-base">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>

			<Container>
				{products && (
					<section className="my-16" id="products">
						<h2 className="mb-8 text-3xl font-bold">Our products</h2>
						<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
					</section>
				)}
			</Container>

			<div className="bg-gray-50">
				<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
					<h2 className="text-gray-900 text-3xl font-bold tracking-tight sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="text-orange-600 block">
							Buy online or reach out for a custom quote.
						</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<Button variant="outline">Get a quote</Button>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<Button>Shop now</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { products },
	};
}
