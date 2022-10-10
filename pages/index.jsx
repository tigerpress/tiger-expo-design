import Link from "next/link";
import {
	HiChatBubbleBottomCenterText,
	HiOutlineBolt,
	HiOutlineGlobeAlt,
	HiOutlineScale,
} from "react-icons/hi";
import Container from "../components/container";
import ProductCard from "../components/product-card";
import products from "./api/products.json";

const features = [
	{
		name: "Competitive exchange rates",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: "HiOutlineGlobeAlt",
	},
	{
		name: "No hidden fees",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: "HiOutlineScale",
	},
	{
		name: "Transfers are instant",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: "HiOutlineBolt",
	},
	{
		name: "Mobile notifications",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: "HiChatBubbleBottomCenterText",
	},
];

export default function Home({ products }) {
	return (
		<>
			<div className="relative overflow-hidden">
				<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Stand out in the crowd
							</h1>
							<p className="mt-4 text-xl text-gray-500">
								Tiger Expo Design offers the widest range of portable display products, fabric
								structures, modular exhibit solutions, display accessories and related graphics.
								Tiger Expo Design offers an extensive selection of banner stands, portable signs,
								light boxes, table throws, popup displays, outdoor displays and exhibit kits and
								accessories! Tiger Expo Design is your one-stop-shop for all types of exhibit and
								display solutions.
							</p>
						</div>
						<div>
							<div className="mt-10">
								{/* Decorative image grid */}
								<div
									aria-hidden="true"
									className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
								>
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="/hero-img.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<a
									href="#"
									className="inline-block rounded-md border border-transparent bg-orange-600 py-3 px-8 text-center font-medium text-white hover:bg-orange-700"
								>
									Increase Recognition
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="text-lg font-semibold text-orange-600">Transactions</h2>
						<p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							A better way to send money
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
							Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
							cupiditate veritatis in accusamus quisquam.
						</p>
					</div>

					<div className="mt-10">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							{features.map((feature) => (
								<div key={feature.name} className="relative">
									<dt>
										<div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</div>
										<p className="ml-16 text-lg font-medium leading-6 text-gray-900">
											{feature.name}
										</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>

			<Container>
				{products && (
					<section className="my-16">
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
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						<span className="block">Ready to dive in?</span>
						<span className="block text-orange-600">Start your free trial today.</span>
					</h2>
					<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
						<div className="inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white hover:bg-orange-700"
							>
								Get started
							</a>
						</div>
						<div className="ml-3 inline-flex rounded-md shadow">
							<a
								href="#"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600 hover:bg-orange-50"
							>
								Learn more
							</a>
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
