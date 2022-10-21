import clsx from "clsx";

const Paragraph = ({ className, children }) => {
	return <p className={clsx(className, "mt-3")}>{children}</p>;
};

export default Paragraph;
