import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage'; // two ../ in thebeginning because you have to go up one folder
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';

const AppRouter = () => (
	// we export this AppROuter because it contains all the Routes we use for client side routing purposes
	
	//  with BrowserRouter we can use props.history in the children components to go back to previous pages 
	// easier and such
	<BrowserRouter>
		<div>
			<Header /> {/*Imported from the header component*/}
			<Switch>
				{/*What switch does is that it stops as soon as i founds a match for the path in url, that way we can use the 404NoMatch page*/}
				<Route path="/" exact={true} component={ExpenseDashboardPage} />
				{/*using exact make sure that only this page will be loaded if its exactly matches the path '/' at the end or nothing...you only need this usually for the home page*/}>
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
