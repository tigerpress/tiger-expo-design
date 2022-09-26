import Image from "next/future/image";
import Link from "next/link";
import products from "./api/products.json";

export default function Home({ products }) {
	return (
		<div>
			{products && (
				<ul className="grid grid-cols-6 gap-8">
					{products.map((product) => (
						<li key={product.id} className="group mt-8 border border-slate-400">
							<Link href={`/products/${product.id}`}>
								<a>
									<div className="relative aspect-square">
										<Image src={product.image} fill alt={product.name} />
									</div>
									<h3 className="relative mt-4 font-bold after:ml-2 after:transition-all after:content-['\2192'] group-hover:after:ml-6">
										{product.name}
									</h3>
								</a>
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { products },
	};
}
