import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>
			Home
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create Expense
		</NavLink>
		<NavLink to="/help" activeClassName="is-active">
			Help
		</NavLink>
		{/*NavLink is better than Link because you can add a bunch of cool features on it eaisly
        like activeClassName="is-active", ( in styles/_base.scss)  allows us to do cool stuff with the Link if we are on that page for instance
        like colour it red or whatever*/}
	</header>
);

export default Header;
