import clsx from "clsx";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Loader } from "./loader";

const IconButton = ({
	variant = "primary",
	size = "md",
	icon,
	round,
	isLoading,
	isError,
	isSuccess,
	onClick,
}) => {
	const Icon = icon;
	const classes = {
		variants: {
			primary: "border border-transparent bg-indigo-700 text-white hover:bg-indigo-800",
			outline: "border-indigo-700 text-indigo-700 border bg-transparent hover:bg-indigo-100",
			ghost: "text-indigo-700 border border-transparent bg-transparent hover:bg-indigo-100",
		},
		sizes: {
			sm: "w-8 h-8 text-lg",
			md: "w-10 h-10 text-xl",
			lg: "w-12 h-12 text-3xl",
		},
		states: {
			loading: "bg-yellow-700 hover:bg-yellow-700",
			error: "bg-red-500 hover:bg-bg-red-500",
			success: "bg-indigo-400 hover:bg-bg-indigo-400",
		},
	};

	return (
		<button
			className={clsx(
				classes.variants[variant],
				classes.sizes[size],
				isError && classes.states.error,
				isLoading && classes.states.loading,
				isSuccess && classes.states.success,
				round && "rounded-full",
				"inline-flex cursor-pointer items-center justify-center text-center transition-all disabled:cursor-not-allowed"
			)}
			disabled={isLoading || isError}
			onClick={onClick}
		>
			{isError ? (
				<div className="flex items-center gap-2">
					<Loader className="h-6 w-6" />
				</div>
			) : isLoading ? (
				<div className="flex items-center gap-2">
					<Loader className="h-6 w-6" />
				</div>
			) : isSuccess ? (
				<div className="flex items-center gap-2">
					<HiOutlineCheckCircle className="h-6 w-6" />
				</div>
			) : (
				<Icon />
			)}
		</button>
	);
};

export { IconButton };
