import Image from "next/future/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Container from "../components/container";
import ProductCard from "../components/product-card";
import products from "./api/products.json";

export default function Home({ products }) {
	return (
		<>
			<div className="h-[80vh] bg-slate-900 bg-[url('/hero-img.jpg')] text-white bg-blend-overlay">
				<Container>
					<div className="flex h-full max-w-prose flex-col justify-center">
						<h1 className="text-7xl font-bold">Make sure you stand out in the crowd</h1>
						<p className="mt-4">
							Tiger Expo Design offers the widest range of portable display products, fabric
							structures, modular exhibit solutions, display accessories and related graphics. Tiger
							Expo Design offers an extensive selection of banner stands, portable signs, light
							boxes, table throws, popup displays, outdoor displays and exhibit kits and
							accessories! Tiger Expo Design is your one-stop-shop for all types of exhibit and
							display solutions.
						</p>
					</div>
				</Container>
			</div>

			<Container>
				{products && (
					<section className="my-16">
						<h2 className="mb-8 text-3xl font-bold">Our products</h2>

						<ul className="grid gap-8 lg:grid-cols-6">
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
		</>
	);
}

export async function getStaticProps() {
	return {
		props: { products },
	};
}
