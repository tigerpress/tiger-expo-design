import Image from "next/future/image";
import { BsArrowRight } from "react-icons/bs";

const ProductCard = ({ product }) => {
	return (
		<div className="group">
			<div className="relative aspect-[4/3] bg-white shadow-lg">
				<Image src={product.image} alt={product.name} fill className="p-8 mix-blend-multiply" />
			</div>
			<div className="ml-1">
				<h3 className="relative mt-3 flex items-center text-lg font-bold">
					{product.name}
					<BsArrowRight className="ml-2 transition-all group-hover:ml-4" />
				</h3>
				<p className="text-sm font-medium text-slate-600">
					starting at ${product.configs[0].options[0].price}
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
