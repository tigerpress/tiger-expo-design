import clsx from "clsx";

const Container = ({ className = "", children }) => {
	return <div className={clsx(className && className, "container mx-auto px-8")}>{children}</div>;
};

export default Container;
