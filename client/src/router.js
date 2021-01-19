import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { Register } from './pages/register';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/dashboard'>
					<Dashboard />
				</Route>
				<Route exact path='/logout'>
					<Logout />
				</Route>
				<Route path='/:key' component={Home}>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
