import clsx from "clsx";
import { HiOutlineCog } from "react-icons/hi";

const Loader = ({ className }) => {
	return <HiOutlineCog className={clsx(className, "inline animate-spin")} />;
};

export { Loader };
