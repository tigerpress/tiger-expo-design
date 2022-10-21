import clsx from "clsx";
import Loader from "./loader";

const Button = ({ children, variant = "primary", size = "md", as = "button", isLoading }) => {
	const Tag = as;
	const classes = {
		variants: {
			primary: "border border-transparent bg-radix-violet-9 text-white hover:bg-radix-violet-10",
			outline:
				"border-radix-violet-9 text-radix-violet-9 border bg-transparent hover:bg-radix-violet-3",
			ghost: "text-radix-violet-9 border border-transparent bg-transparent hover:bg-radix-violet-3",
		},
		sizes: {
			sm: "px-4 py-2",
			md: "px-8 py-4",
			lg: "px-12 py-6 text-lg",
		},
	};

	return (
		<Tag
			className={clsx(
				classes.variants[variant],
				classes.sizes[size],
				"inline-block cursor-pointer text-center font-medium transition-all disabled:opacity-50"
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
