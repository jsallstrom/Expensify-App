import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expense-actions';
import { removeExpense } from '../actions/expense-actions';

// Editing the expense with id of {props.match.params.id}

const EditExpensePage = (props) => {
	console.log(props);

	// expense={props.expense} is almost like writing 'currentExpense={props.expense}' 
	/* Send down the current expense's values (Description, Amount, date etc.)*/
	return <div>
			<ExpenseForm
				expense={props.expense} 
								
				onSubmit={(updatedExpense) => {
					props.dispatch(editExpense(props.match.params.id, updatedExpense));
				// dispatch an 'editExpense'-action to Redux with the expense created
				// BUT before we can do this dispatch we need to connect()() to the redux store 
				// in our export line down below
					props.history.push('/');
				// whats Very usefull here in props is the history.push
				// because with this we can automaticly navigate to another part of the
				// page, like the dashboard with '/' or the addExpensepage with '/create'
				// will redirect as soon as its submitted
				// can also redirect to lets say helpPage with .push('/help')
					console.log('updated', updatedExpense)
				}}
			></ExpenseForm>
			<button
			onClick={() => {
				props.dispatch(removeExpense({id: props.match.params.id} ));
				props.history.push('/');
				
			}}
		>
			Remove
		</button>
		</div>;
};			// when updatedExpense comes up from ExpenseForm here then this shit is executed

// find in redux store a expense with the same matching ID as 'props.match.params.id'
const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id
		}) // searches through all expenses for an expense where its id matches the same we want
	};
}

export default connect(mapStateToProps)(EditExpensePage);
