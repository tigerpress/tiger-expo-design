import clsx from "clsx";

const Container = ({ className = "", children }) => {
	return (
		<div className={clsx(className && className, "container mx-auto h-full px-[10vw]")}>
			{children}
		</div>
	);
};

export default Container;
