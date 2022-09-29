import Image from "next/future/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import products from "./api/products.json";

export default function Home({ products }) {
	return (
		<div className="">
			<div className="max-w-prose">
				<h1 className="text-7xl font-black">We&apos;ll make sure you stand out in the crowd</h1>
				<p className="mt-4">
					Tiger Expo Design offers the widest range of portable display products, fabric structures,
					modular exhibit solutions, display accessories and related graphics. Tiger Expo Design
					offers an extensive selection of banner stands, portable signs, light boxes, table throws,
					popup displays, outdoor displays and exhibit kits and accessories! Tiger Expo Design is
					your one-stop-shop for all types of exhibit and display solutions.
				</p>
			</div>

			{products && (
				<section className="mt-16">
					<h2 className="mb-8 text-3xl font-bold">Our products</h2>

					<ul className="grid gap-8 lg:grid-cols-6">
						{products.map((product) => (
							<li key={product.id} className="group">
								<Link href={`/products/${product.id}`}>
									<a>
										<div className="relative aspect-square rounded-lg bg-slate-200">
											<Image
												src={product.image}
												alt={product.name}
												fill
												className="p-4 mix-blend-multiply"
											/>
										</div>
										<div className="ml-1">
											<h3 className="relative mt-2 flex items-center text-lg font-bold">
												{product.name}
												<BsArrowRight className="ml-2 transition-all group-hover:ml-4" />
											</h3>
											<p className="text-sm font-medium text-slate-600">
												starting at ${product.configs[0].options[0].price}
											</p>
										</div>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { products },
	};
}
