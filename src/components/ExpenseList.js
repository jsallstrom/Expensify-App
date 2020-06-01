import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expensesSelector'; // we use this selector to get

// React Redux provides a connect function for you to connect your component to the store.

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>

		{props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense} />;
		})}
	</div>
); // SPread in the expense you wanna show from goin through the list

// Here we define what parts of the state that we wanna use in our props
const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters) // Now we populate the expenses-list variable
		// with expenses that will be filtered through our filter ^^
	};
};

// in the fisrt () we put an object that we want the redux state to copy in its variables into

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

// ok...how the fuck doesthis work?
// First we create the component we wanna use and how we wanna use the variables we send into props
// then we create the mapStateToProps function that will take the "state" variables inside of our global store
// and return a props object with those inside that can use in the component we first created
//
// lastly we use the react-redux function "connect" to connect to the store, map the state variables to the props
// and finally use it inside of ExpenseList-component

export default ConnectedExpenseList; // This looks weird but what it does is it exports
// the component ExpenseList, WHICH is now connected with the Redux store and will update itself
//
//

// SO BASICALLY:
// Here we create a component ExpenseList
// Also create a helper variable object mapStateToProps
// that will put all the values of variables from Redux State into a props variable
// WHICH is then used inside the ExpenseList
// The React-Redux function connect just puts the mapStateToProps as props into ExpenseList(props)
//
// In the end we Export a component which is connected to the store and uses variables from
// the redux store state in its props values to show and use in a good way.
// usually we dont export a separate ConnectedExpenseList
// Normal syntax is: export default connect(mapStateToProps)(ExpenseList);
