import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { post } from '../infrastructure/api-client';

export const Heading = () => {
	const [token, setToken] = useState('');

	const handleClick = async () => {
		const token = await post('http://localhost:1234/accounts/createghost');
		setToken(token);
	};

	return (
		<div>
			<Button onClick={handleClick}>tokenize</Button>

			<p>{token}</p>
		</div>
	);
};
