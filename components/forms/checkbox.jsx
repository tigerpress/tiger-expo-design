import { forwardRef } from "react";

const Checkbox = forwardRef(({ name, label, ...rest }, ref) => {
	return (
		<label className="mt-1 mb-1 flex items-center">
			<input type="checkbox" name={name} {...rest} ref={ref} className="w-full" />
			<span className="ml-3 block">{label}</span>
		</label>
	);
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
