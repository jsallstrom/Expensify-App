import React from 'react'; // You gotta always import react

// here props is a collection of all arguments you send in to Options via the <Option key={option} optionText={option} />
const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
				onClick={(e) => {
					props.handleDeleteASingleOption(props.optionText);
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default Option;
