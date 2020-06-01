import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('YYYY MMM Do'));

export default class ExpenseForm extends React.Component {

	constructor(props) {
		super(props);


		// to explain the syntax below
		// If the expense used in this form already has values from (EditExpensePage)
		// then add those values to the fields, else just leave them blank
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '', // convert amount so its a number??
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocused: false,
			error: ''
		};
		// description: props.expense ? props.expense.description : '' means
		// if props.expens is true(meaning it has a previous value) then it is assigned 
		// that value...if it is empty then description is assigned the value of ''
		

	}


	

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description: description })); // set the description variable in state to the value in descriptionfield from form
	};

	onNoteTextAreaChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note: note }));
	};

	// start by setting what type of input you want, then set it to the state.variable that corrisponds to it
	// you can add some hint: text with placeholder and lastly make an eventhandler for when you onChange the
	// input field

	onAmountChange = (e) => {
		const amount = e.target.value;
		// this time we check the value so we dont set a wierd value to our amount, like non-number

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			//  (!amount || ... ) WITH THIS PART IT WILL ALLOW THE USER TO DELETE THE NUMBER AND LEAV AND EMPTY FIELLD,
			// using regex we can decide if its the type of value we want, check www.regex101.com for help
			this.setState(() => ({ amount: amount }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			// this if() prevents the user from clearing a value from date and making it empty, could cause nullpointer exception
			this.setState(() => ({ createdAt: createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calenderFocused: focused }));
	};

	onSubmit = (e) => {
		e.preventDefault(); //prevents the page from refreshing when you click addExpense button and submits the form

		if (!this.state.description || !this.state.amount) {
			// render error if no description or amount found
			//  set error state equal to 'Please provide description and amount'
			this.setState(() => ({ error: 'Please provide description and amount' }));
		} else {
			// clear error because everything is fine
			this.setState(() => ({ error: '' }));

			// create the Expense we wanna save in Redux
			const newExpense = {
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100, // google parseFloat for more info
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			};

			this.props.onSubmit(newExpense);
			// send it up to the parent component through the props onSubmit
		}
	};

	// the {this.state.error && <p>{this.state.error}</p>}
	// is a standard way of showing an error message in a paragraph tag

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				{/*This^ little thing will show a error text with the whole 'if this.state.error then' render p with it inside */}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					{/*Autofocus its like you ve clicked the textfield when you enter the part of the component*/}

					<input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />

					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={(day) => false}
					/>

					<textarea
						placeholder="Add a note for your expense (Optional)"
						value={this.state.note}
						onChange={this.onNoteTextAreaChange}
					/>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
