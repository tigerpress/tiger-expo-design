import clsx from "clsx";
import Loader from "./loader";

const Button = ({ children, variant = "primary", size = "md", as = "button", isLoading }) => {
	const Tag = as;
	return (
		<Tag
			className={clsx(
				variant === "primary" &&
					"border border-transparent bg-radix-violet-9 text-white hover:bg-radix-violet-10",
				variant === "outline" && "border-blue-700 text-blue-700 border bg-transparent",
				variant === "ghost" && "text-blue-700 border border-transparent bg-transparent",
				size === "sm" && "px-2 py-1",
				size === "md" && "px-4 py-2",
				size === "lg" && "px-8 py-4",
				"inline-block cursor-pointer text-center transition-all disabled:opacity-50"
			)}
			disabled={isLoading}
		>
			{isLoading ? (
				<span>
					<Loader />
					loading...
				</span>
			) : (
				children
			)}
		</Tag>
	);
};

export default Button;
