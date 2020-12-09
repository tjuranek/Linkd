import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/index';
import { render } from 'react-dom';
import { Heading } from './components/heading';

const App = () => {
	const test = useSelector(state => state);
	console.log(test);
	return (
		<div>
			<Heading />
			<h1>Testing!</h1>
		</div>
	);
};

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
