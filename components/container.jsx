import clsx from "clsx";

const Container = ({ className = "", children }) => {
	return (
		<div className={clsx(className && className, "mx-auto w-full max-w-7xl px-8")}>{children}</div>
	);
};

export { Container };
