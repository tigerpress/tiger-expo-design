import clsx from "clsx";

const Title = ({ level = "h2", className = "", children }) => {
	const Tag = level;

	const classes = {
		h1: "leading-tight text-4xl md:text-5xl font-bold",
		h2: "leading-tight text-3xl md:text-4xl font-semibold",
		h3: "text-2xl font-medium md:text-3xl",
		h4: "text-xl font-medium md:text-2xl",
		h5: "text-lg font-medium md:text-xl",
		h6: "text-lg font-medium",
	};

	return <Tag className={clsx(classes[level], className)}>{children}</Tag>;
};

export default Title;
