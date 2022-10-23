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
			primary: "border border-transparent bg-indigo-700 text-white hover:bg-indigo-800",
			outline: "border-indigo-700 text-indigo-700 border bg-transparent hover:bg-indigo-100",
			ghost: "text-indigo-700 border border-transparent bg-transparent hover:bg-indigo-100",
		},
		sizes: {
			sm: "px-3 py-1",
			md: "px-6 py-3",
			lg: "px-9 py-6",
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
