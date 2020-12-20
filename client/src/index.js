import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { getToken, setToken } from './store/ducks/app';
import { registerAccount } from './store/ducks/account';

import { store } from './store/index';
import { render } from 'react-dom';

import { AppRouter } from './router';

/* const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.app.token);

	useEffect(() => {
		const lsToken = localStorage.getItem('token');
		lsToken ? dispatch(setToken(lsToken)) : dispatch(getToken());
	}, []);

	const handleRegister = () => {
		if (!token) {
			alert('ya done messed up a-aron');
		}

		dispatch(registerAccount());
	};

	return (
		<div>
			<p>Token: {token}</p>
			<button onClick={handleRegister}>Register</button>
		</div>
	);
}; */

render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('root')
);
