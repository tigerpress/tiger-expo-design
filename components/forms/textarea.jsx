import { forwardRef } from "react";

const TextArea = forwardRef(({ name, label, type = "text", rows = "12", ...rest }, ref) => {
	return (
		<label className="mt-3 block">
			<span className="mb-1 block font-medium">{label}</span>
			<textarea
				type={type}
				name={name}
				{...rest}
				ref={ref}
				id={name}
				rows={rows}
				className="w-full"
			/>
		</label>
	);
});

TextArea.displayName = "TextArea";

export { TextArea };
