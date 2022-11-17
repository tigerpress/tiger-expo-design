import { forwardRef } from "react";

const Select = forwardRef(({ name, label, children, ...rest }, ref) => {
	return (
		<label className="mt-3 block">
			<span className="mb-1 block font-medium">{label}</span>
			<select
				name={name}
				ref={ref}
				id={name}
				{...rest}
				className="w-full overflow-hidden text-ellipsis"
			>
				{children}
			</select>
		</label>
	);
});

Select.displayName = "Select";

export { Select };
