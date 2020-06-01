import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer';

// Store creation, configuration and exportation
export default () => {
	const store = createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}), 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	); // Create a variable for each reducer in the store and add it to it like this with combineReducers
	// now the store will contain multiple Reducers that can handle multiple actions to be dispatched
	return store;
};
