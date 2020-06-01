import uuid from 'uuid'; // this is just a tool to create unique ids, if we use mongo db we can use its id creating rather

// Action generators for expenses
// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	// destructor the argumentexpense, also put in defaultvalues
	// Also no return valued needed with this syntax
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description: description,
		note: note,
		amount: amount,
		createdAt: createdAt
	}
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	// destructor the object (take out id), and if it doesnt exist return an empty object

	type: 'REMOVE_EXPENSE',
	id: id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id: id,
	updates: updates
});

// while editing an expense it is Really awesome to use the OBJECT spread operator
// because with it you can make a copy and override some variables without changing any others

// AlSO you gotta export your Actions so you can import them and use them in your reducers
