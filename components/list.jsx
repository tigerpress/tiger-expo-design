import clsx from "clsx";

const List = ({ style, items, indent, decoration }) => {
	const Tag = style;

	return (
		<Tag
			className={clsx(
				style === "ul" && "list-disc",
				style === "ol" && "list-decimal",
				decoration === "none" && "list-none",
				indent && "ml-6",
				"mt-3 list-outside"
			)}
		>
			{items &&
				items.map((item) => (
					<li key={item} className="mt-1">
						{item}
					</li>
				))}
		</Tag>
	);
};

export default List;
