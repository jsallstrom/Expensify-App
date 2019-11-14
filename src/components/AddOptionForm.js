import React from 'react';

class AddOptionForm extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {
			error: undefined // no error yet
		};
	}

	onFormSubmit(e) {
		e.preventDefault(); // this prevents that old ass way of refreshing the page completely after submiting a form

		const option = e.target.elements.inputOptionField.value.trim();
		// event -> target event used -> all elements in target event -> name of the inputfield (inputOption) -> value of what was in that field

		// use its parents method, pass up
		const error = this.props.handleAddOption(option); // this will both fire off the parent method and catch any errors that might occur

		this.setState(() => ({
			error: error
		}));

		if (!error) {
			// if there was no error clear the textField
			e.target.elements.inputOptionField.value = '';
		}
	}

	render() {
		const error = this.state.error; // doing this will make sure that less faults will be had with code, like somone forgetting to include, this.state. before and shhitttt7dyASDFLIuAS>ÄPJfol-g
		return (
			<div>
				{error && <p>{error}</p>} {/*This will show the error if it exists*/}
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="inputOptionField" />
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOptionForm;
