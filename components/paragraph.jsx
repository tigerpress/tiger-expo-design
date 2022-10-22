import clsx from "clsx";

const Paragraph = ({ className, children }) => {
	return <p className={clsx(className, "mt-4 mb-2")}>{children}</p>;
};

export default Paragraph;
