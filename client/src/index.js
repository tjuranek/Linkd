import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { setToken } from './store/ducks/app';

import { store } from './store/index';
import { render } from 'react-dom';
import { Heading } from './components/heading';
import axios from 'axios';

const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.app.token);

	const getToken = async () => {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:1234/accounts/createghost'
		});

		const token = response.data.token;
		dispatch(setToken(token));
	};

	useEffect(() => {
		getToken();
	}, []);

	return <p>Token: {token}</p>;
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
