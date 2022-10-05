const Select = (props) => {
	const { label, name, onChange, disabled = false, errors, children } = props;

	return (
		<label htmlFor={name} onChange={onChange}>
			<span className="block">{label}</span>
			<select name={name} id={name} disabled={disabled}>
				{children}
			</select>
			{errors && <p>{errors}</p>}
		</label>
	);
};

export default Select;
