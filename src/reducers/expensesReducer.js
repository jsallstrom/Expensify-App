// create a variable for defaultValue
const expensesReducerDefaultState = []; // can also be more complex, look below
// Expenses Reducer

// if not export like this then like this then we would have to expensesReducer.expensesReducer();,
export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ]; // using ARRAY spread operator ´to return an array with the previous state in but with the added expense to the end

		case 'REMOVE_EXPENSE':
			return state.filter((expense) => {
				//  with the function filter you can filter out unwanted stuff
				return expense.id !== action.id; // add current expense to the list as long as its id is not the same as the action.id, which is the id of the expense you wanna remove
			});

		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates };
					// return an copy of an update expense with this simple object spread operator...Really fucking easy
					// spread in a copy of old expense
					// but spread in the updates from action, then you can also apperently spread in all the updates like that
					// these two lines will ONLY update the fields you have put in to be updated
				} else {
					return expense; // just put in this expense without changing it
				}
			});

		default:
			return state; // if nothing has change just return the state as it is
	}
};
