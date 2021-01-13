import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

export const AccountButtons = () => {
	return (
		<Grid container>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>Log In</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>Register</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
