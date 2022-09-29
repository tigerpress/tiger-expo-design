const Select = ({ register, options, name, label, ...rest }) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<select {...register(name)} {...rest}>
				{options.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
