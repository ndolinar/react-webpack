import '../../favicon.ico';
import './App.scss';

import React, { Component } from 'react';
// import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<header className="header">
						<div className="">
							<NavLink exact to="/">
								Logo
							</NavLink>
						</div>
						<div>
							<NavLink to="/about">About</NavLink>
						</div>
					</header>
					<div className="main">
						<Switch>
							{/* <ProtectedRoute path="/profile" component={ProfilePage} /> */}
							<Route exact={true} path="/" component={HomePage} />
							<Route path="/about" component={AboutPage} />
						</Switch>
					</div>
					<footer className="footer container">Footer</footer>
				</div>
			</Router>
		);
	}
}

export default App;
