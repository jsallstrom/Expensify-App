import React from 'react';
import { Link } from 'react-router-dom'



// When sending in a expense here, destructor it
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
		<h3>{description}</h3>
		</Link>
		<p>
			{amount} - {createdAt}
		</p>
		
	</div>
);

export default ExpenseListItem; // sometimes we just need to connect so we can make dispatch an Action
