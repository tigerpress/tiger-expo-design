import clsx from "clsx";

const Title = ({ level = "h2", className = "", children }) => {
	const Tag = level;

	const classes = {
		h1: "leading-tight text-4xl md:text-5xl font-black",
		h2: "leading-tight text-2xl md:text-3xl font-bold",
		h3: "text-lg font-medium md:text-lg font-semibold",
		h4: "text-md font-medium md:text-md font-semibold",
		h5: "font-medium",
		h6: "text-sm font-medium",
	};

	return <Tag className={clsx(classes[level], className)}>{children}</Tag>;
};

export { Title };
