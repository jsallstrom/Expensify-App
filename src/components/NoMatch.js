import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
	<div>
		<p>404! The page was not Found!</p>
		<Link to="/"> Go Home</Link>{' '}
		{/*when linking to pages Inside your app use link, when linking to other pages you can use the <a href="/google.com">link</a>*/}
	</div>
);

export default NoMatch;
