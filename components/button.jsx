import clsx from "clsx";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Loader } from "./loader";

const Button = ({
	children,
	variant = "primary",
	size = "md",
	as = "button",
	isLoading,
	isError,
	isSuccess,
	href,
	onClick,
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
		states: {
			loading: "bg-yellow-700 hover:bg-yellow-700",
			error: "bg-red-500 hover:bg-bg-red-500",
			success: "bg-indigo-400 hover:bg-bg-indigo-400",
		},
	};

	return (
		<Tag
			className={clsx(
				classes.variants[variant],
				classes.sizes[size],
				isError && classes.states.error,
				isLoading && classes.states.loading,
				isSuccess && classes.states.success,
				"inline-block cursor-pointer rounded-full text-center font-medium transition-all will-change-transform active:scale-95  disabled:cursor-not-allowed"
			)}
			{...(as === "a" ? (href = { href }) : null)}
			disabled={isLoading || isError}
			onClick={onClick}
		>
			{isError ? (
				<div className="flex items-center gap-2">
					<Loader className="h-6 w-6" />
					An error occurred...
				</div>
			) : isLoading ? (
				<div className="flex items-center gap-2">
					<Loader className="h-6 w-6" />
					Loading...
				</div>
			) : isSuccess ? (
				<div className="flex items-center gap-2">
					<HiOutlineCheckCircle className="h-6 w-6" />
					Success!
				</div>
			) : (
				children
			)}
		</Tag>
	);
};

export { Button };
