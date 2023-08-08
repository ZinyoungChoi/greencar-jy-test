import "../assets/css/common.css"

const Select = (props) => {
	return (
		<select>
			{props.options.map((option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};
export default Select;