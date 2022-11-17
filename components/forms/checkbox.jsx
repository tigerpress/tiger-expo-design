import { forwardRef } from "react";

const Checkbox = forwardRef(({ name, label, ...rest }, ref) => {
	return (
		<label className="mt-3 flex items-center">
			<input type="checkbox" name={name} {...rest} ref={ref} />
			<span className="ml-3 block">{label}</span>
		</label>
	);
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
