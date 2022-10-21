import clsx from "clsx";
import Loader from "./loader";

const Button = ({
	children,
	variant = "primary",
	size = "md",
	as = "button",
	isLoading,
	loadingMessage,
}) => {
	const Tag = as;
	const classes = {
		variants: {
			primary: "border border-transparent bg-violet-700 text-white hover:bg-violet-800",
			outline: "border-violet-700 text-violet-700 border bg-transparent hover:bg-violet-100",
			ghost: "text-violet-700 border border-transparent bg-transparent hover:bg-violet-100",
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
					{loadingMessage}...
				</span>
			) : (
				children
			)}
		</Tag>
	);
};

export default Button;
