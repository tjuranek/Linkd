import { Typography } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/navbar';
import { Tagline } from '../components/tagline';

export const Home = () => {
	return (
		<div>
			<Navbar />
			<Tagline />
		</div>
	);
};
