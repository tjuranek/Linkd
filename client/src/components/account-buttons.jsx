import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from './link';
import React from 'react';

export const AccountButtons = () => {
	return (
		<Grid container>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>
						<Link to='/login'> Log In</Link>
					</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>
						<Link to='register'>Register </Link>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
