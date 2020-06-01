import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expense-actions';
import { setTextFilter } from './actions/filter-actions';


import getVisableExpenses from './selectors/expensesSelector';
import 'normalize.css/normalize.css'; // Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. 
									 //  Normalize.css corrects common bugs and is easily installed with "npm install --save normalize.css"

import './styles/style.scss'; // here is where we import all our css so it it used on all our elements, no need to induvidually import them into each component

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 3000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 19500 }));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters);

console.log(visableExpenses);

// React Redux provides <Provider />, which makes the Redux store available to the rest of your app:
const rootElement = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(rootElement, document.getElementById('root')); // AppRouter was imported from the routers-folder



// PDP-testing

// ReactDOM.render(<DatabasesModal />, document.getElementById('root'));

// ReactDOM.render(<ProviderModal />, document.getElementById('root'));
