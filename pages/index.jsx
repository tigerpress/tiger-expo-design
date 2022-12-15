import Link from "next/link";
import {
	HiOutlineCollection,
	HiOutlineCursorClick,
	HiOutlineGlobe,
	HiOutlinePuzzle,
} from "react-icons/hi";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { ProductCard } from "../components/product-card";
import { Section } from "../components/section";
import { Title } from "../components/title";
import products from "./api/products.json";

const features = [
	{
		name: "Portability",
		description:
			"Exhibitors are always on the go. Our trade show booth displays are lightweight, easy to assemble, and portable. Most of our products assemble in minutes and without any extra tools. Set up and breakdown your booth faster, getting you from convention to convention with less hassle.",
		icon: HiOutlineGlobe,
	},
	{
		name: "Customization",
		description:
			"Whether you're setting up a vendor table for a conference or a 10 x 10 exhibit display booth at a large trade expo, we offer custom printed trade show displays for many of our products. Make a statement with a custom pop up backwall or a branded table cover or a customized banner stand.",
		icon: HiOutlinePuzzle,
	},
	{
		name: "Budget Friendly",
		description:
			"We believe that can you still get cheap trade show displays that are also high quality. With our expansive and well priced inventory, there's an exhibit display option for every budget.",
		icon: HiOutlineCollection,
	},
	{
		name: "Single Source",
		description:
			"Tiger Expo Design is a one-stop shop for all your trade show needs, making it easy and convenient to find exactly what you need to be fully prepared for any promotional event. Mix and match to create the perfect exhibit that reflects your brand and lets you stand out from the competition.",
		icon: HiOutlineCursorClick,
	},
];

const HomePage = ({ products }) => {
	return (
		<>
			<Section className="relative bg-yellow-300">
				<Container>
					<div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-y-0">
						<div className="col-span-full max-w-prose lg:col-span-5 lg:col-start-1">
							<Title level="h1">Get your business ready for showtime</Title>
							<p className="mt-4 mb-8 text-xl">
								Tiger Expo Design offers an extensive selection of tradeshow displays, such as
								banner stands, portable signs, light boxes, table throws, popup displays, outdoor
								displays and exhibit kits and accessories!
							</p>
							<Link href="/products" passHref>
								<Button size="md" as="a">
									Shop now
								</Button>
							</Link>
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
						<Title level="h2">Stand out from the crowd with custom made tradeshow displays</Title>
						<p className="mt-4 text-xl text-gray-800">
							If you&apos;re looking for an eye-catching tradeshow exhibit display, Tiger Expo
							Design can help no matter your budget. From simple banner stands to backlit displays
							and counters, we&apos;ve got what you need.
						</p>
					</div>
					<div className="mt-12">
						<dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
							{features.map((feature) => (
								<div key={feature.name} className="group relative">
									<dt>
										<div className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black transition-colors group-hover:bg-yellow-300">
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</div>
										<p className="ml-16 text-lg font-semibold leading-6">{feature.name}</p>
									</dt>
									<dd className="mt-2 ml-16 text-base">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</Container>
			</Section>

			{products && (
				<Section className="bg-white">
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

			<Section className="bg-yellow-300">
				<Container>
					<div className="grid items-center md:grid-cols-12">
						<div className="col-span-full md:col-span-6 lg:col-span-7 lg:col-start-1 lg:row-start-1">
							<img src="crowd.webp" />
						</div>
						<div className="col-span-full bg-white p-12 md:col-span-6 md:shadow-lg lg:col-start-7 lg:row-start-1">
							<Title level="h2">Do we have you convinced?</Title>
							<p className="mt-4 mb-8 text-xl">
								Don&apos;t miss out on the opportunity to make a great impression at your next
								tradeshow. Contact us today to learn more and start creating the perfect display for
								your needs.
							</p>
							<div className="flex gap-4">
								<Link href="/products" passHref>
									<Button as="a">Shop now</Button>
								</Link>
								<Link href="/contact" passHref>
									<Button as="a" variant="outline">
										Contact us
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: { products },
	};
}

export default HomePage;
