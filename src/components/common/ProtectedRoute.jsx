import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = {
	isAuthenticated: true,
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			auth.isAuthenticated ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			)
		}
	/>
);

export default ProtectedRoute;
