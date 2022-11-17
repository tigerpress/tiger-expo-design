import clsx from "clsx";

const Section = ({ className, as = "section", children }) => {
	const Tag = as;
	return <Tag className={clsx(className, "py-8 md:py-16 lg:py-20")}>{children}</Tag>;
};

export default Section;
