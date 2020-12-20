import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
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
				<Route path='/:key' component={Home}>
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
