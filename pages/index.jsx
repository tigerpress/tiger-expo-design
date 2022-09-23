import Link from "next/link";
import { useProducts } from "../hooks/useProducts";
export default function Home() {
	const { products, loading, error } = useProducts();
	console.log(products);
	return (
		<div>
			<h1>TigerExpoDesign</h1>
			{loading && <p>Loading products...</p>}
			{error && <p>{error.info.message}</p>}
			{products && (
				<div>
					<ul>
						{products.map((product) => (
							<li key={product.id}>
								<Link href={`/products/${product.id}`}>
									<a>
										<img src={`data:image/jpeg;base64, ${product.picture}`} alt={product.product} />
										<h3>{product.product}</h3>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
