import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { post } from '../infrastructure/api-client';

export const Heading = () => {
	const [token, setToken] = useState('');

	const handleClick = async () => {
		debugger;

		alert('test');
		/* 		const reponse = await post('http://localhost:1234/accounts/login', {
			email: 'vimiscool@gmail.com',
			password: 'emacssucks'
		});

		setToken(response); */
	};

	return (
		<div>
			<Button onClick={handleClick}>Testt</Button>

			<p>{token}</p>
		</div>
	);
};
