import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { getToken, setToken } from './store/ducks/app';

import { store } from './store/index';
import { render } from 'react-dom';

const App = () => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.app.token);

	useEffect(() => {
		const lsToken = localStorage.getItem('token');
		lsToken ? dispatch(setToken(lsToken)) : dispatch(getToken());
	}, []);

	return <p>Token: {token}</p>;
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
