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

	useEffect(() => {
		dispatch(setToken());
	}, []);

	return <p>Token: {token}</p>;
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
