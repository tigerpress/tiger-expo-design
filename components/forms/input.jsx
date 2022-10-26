import { forwardRef } from "react";

const Input = forwardRef(({ name, label, type = "text", ...rest }, ref) => {
	return (
		<>
			<label className="mt-3 block">
				<span className="mb-1 block font-medium">{label}</span>
				<input type={type} name={name} {...rest} ref={ref} id={name} className="w-full" />
			</label>
		</>
	);
});

Input.displayName = "Input";

export default Input;
