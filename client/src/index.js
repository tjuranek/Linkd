import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { getToken, setToken } from './store/ducks/app';
import { getAccountInfo, registerAccount } from './store/ducks/account';

import { store } from './store/index';
import { render } from 'react-dom';

import { AppRouter } from './router';

const App = () => {
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

	const handleInfo = () => {
		dispatch(getAccountInfo());
	};

	return (
		<div>
			<p>Token: {token}</p>
			<button onClick={handleRegister}>Register</button>
			<button onClick={handleInfo}>Info</button>
		</div>
	);
};

render(
	<Provider store={store}>
		<App />
		{/* 		<AppRouter /> */}
	</Provider>,
	document.getElementById('root')
);
