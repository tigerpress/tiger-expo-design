import Link from "next/link";
import Container from "../../components/container";
import ProductCard from "../../components/product-card";
import Section from "../../components/section";
import Title from "../../components/title";
import products from "../api/products.json";

const ProductsPage = ({ products }) => {
	return (
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
	);
};

export async function getStaticProps() {
	return {
		props: { products },
	};
}

export default ProductsPage;
