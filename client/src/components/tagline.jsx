import { Box, Typography } from '@material-ui/core';
import React from 'react';

export const Tagline = () => {
	const bolden = text => {
		return <b>{text}</b>;
	};

	return (
		<Typography variant='p'>
			An {bolden('easy')} and {bolden('trackable')} way to{' '}
			{bolden('share links')}
		</Typography>
	);
};
