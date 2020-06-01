import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expense-actions';

const AddExpensePage = (props) => (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				console.log(expense);
				props.dispatch(addExpense(expense));
				// dispatch an 'addExpense'-action to Redux with the expense created
				// BUT before we can do this dispatch we need to connect()() to the redux store 
				// in our export line down below
				props.history.push('/');
				// whats Very usefull here in props is the history.push
				// because with this we can automaticly navigate to another part of the
				// page, like the dashboard with '/' or the addExpensepage with '/create'
				// will redirect as soon as its submitted
				// can also redirect to lets say helpPage with .push('/help')
			}}
		/>
	</div>
); // send down the onSubmit() as props for the ExpenseForm component
// and when it retunr the expense we submit through its form we can add it
// to Redux here!!!

export default connect()(AddExpensePage);
// we dont need anything from the redux store so we can leave the first
// parenthesis empty, we just need to connect our AddExpensePage-component
// so we can dispatch an action abobe using the line 'props.dispatch(addExpense(expense));'
