import React from 'react';
import { render } from 'react-dom';
import { Heading } from './components/heading';

const App = () => {
	return (
		<div>
			<Heading />
			<h1>Testing!</h1>
		</div>
	);
};

render(<App />, document.getElementById('root'));
