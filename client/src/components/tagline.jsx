import { Box, Typography } from '@material-ui/core';
import React from 'react';

export const Tagline = () => {
	return (
		<Typography variant='p'>
			An
			<Box fontWeight='fontWeightBold' m={1}>
				easy
			</Box>
			and
			<Box fontWeight='fontWeightBold' m={1}>
				trackable
			</Box>
			way to
			<Box fontWeight='fontWeightBold' m={1}>
				share links
			</Box>
		</Typography>
	);
};
