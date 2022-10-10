import clsx from "clsx";
import Loader from "./loader";

const Button = ({ children, variant = "primary", size = "md", isLoading }) => {
	return (
		<button
			className={clsx(
				variant === "primary" && "border border-transparent bg-blue-700 text-white",
				variant === "outline" && "border border-blue-700 bg-transparent text-blue-700",
				variant === "ghost" && "border border-transparent bg-transparent text-blue-700",
				size === "sm" && "px-2 py-1",
				size === "md" && "px-4 py-2",
				size === "lg" && "px-8 py-4",
				"rounded-full transition-all hover:ring hover:ring-offset-1 disabled:opacity-50"
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
		</button>
	);
};

export default Button;