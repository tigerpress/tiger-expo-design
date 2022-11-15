import clsx from "clsx";

const Section = ({ className, as = "section", children }) => {
	const Tag = as;
	return <Tag className={clsx(className, "py-10 md:py-24")}>{children}</Tag>;
};

export default Section;
