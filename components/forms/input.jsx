import { forwardRef } from "react";

const Input = forwardRef(({ name, label, type = "text", errors, ...rest }, ref) => {
	const errorMessages = errors ? errors[name] : null;

	return (
		<>
			<label className="mt-3 block">
				<span className="mb-1 block font-medium">{label}</span>
				<input
					type={type}
					name={name}
					{...rest}
					ref={ref}
					id={name}
					aria-invalid={errorMessages ? "true" : "false"}
					className="w-full"
				/>
				{errorMessages && (
					<p role="alert" className="mt-1 text-sm font-semibold text-red-500">
						{errorMessages?.message}
					</p>
				)}
			</label>
		</>
	);
});

Input.displayName = "Input";

export { Input };
