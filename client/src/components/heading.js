import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { post } from '../infrastructure/api-client';
import { getAccountInfo } from '../store/ducks/account';

export const Heading = () => {
	const [token, setToken] = useState('');

	const handleClick = async () => {
		const token = await post('http://localhost:1234/accounts/createghost');
		setToken(token);
	};

	const handleClickInfo = async () => {
		getAccountInfo();
	};

	return (
		<div>
			<Button onClick={handleClick}>tokenize</Button>
			<Button onClick={handleClickInfo}>info</Button>

			<p>{token}</p>
		</div>
	);
};
