import clsx from "clsx";
import Link from "next/link";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { Loader } from "./loader";

const ButtonOrLink = ({ href, to, ...props }) => {
	if (href) {
		return <a href={href} target="_blank" rel="noreferrer noopener" {...props} />;
	}

	if (to) {
		return (
			<Link href={to}>
				<a {...props}>{props.children}</a>
			</Link>
		);
	}

	return <button {...props} />;
};

const Button = ({
	children,
	variant = "primary",
	size = "md",
	isLoading,
	isError,
	isSuccess,
	...props
}) => {
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
		},
	};

	return (
		<ButtonOrLink
			className={clsx(
				classes.variants[variant],
				classes.sizes[size],
				"inline-flex cursor-pointer items-center justify-center rounded-full text-center font-medium transition-all will-change-transform active:scale-95 disabled:cursor-not-allowed"
			)}
			disabled={props.disabled || isLoading}
			{...props}
		>
			{isLoading ? <Loader className="h-6 w-6" /> : children}
		</ButtonOrLink>
	);
};

export { Button };
