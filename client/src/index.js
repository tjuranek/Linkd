import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/index';
import { render } from 'react-dom';
import { Heading } from './components/heading';
import axios from 'axios';

const App = () => {
	const [state, setState] = useState('some-token');

	const getToken = async () => {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:1234/accounts/createghost'
		});

		const token = response.data.token;

		setState(token);
	};

	useEffect(() => {
		getToken();
	}, []);

	return <p>Token: {state}</p>;
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
