const TextInput = ({ register, name, label, ...rest }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input type="text" {...register(name)} {...rest} />
		</div>
	);
};

export default TextInput;
