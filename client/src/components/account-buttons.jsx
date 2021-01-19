import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from './link';
import React from 'react';
import { useSelector } from 'react-redux';

export const AccountButtons = () => {
	const isLoggedIn = useSelector(state => state.account.isLoggedIn);

	if (isLoggedIn) {
		return (
			<Grid container>
				<Grid item>
					<Box px={1}>
						<Typography variant='h5'>
							<Link to='/dashboard'>Dashboard</Link>
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Box px={1}>
						<Typography variant='h5'>
							<Link to='/logout'>Logout</Link>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		);
	}

	return (
		<Grid container>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>
						<Link to='/login'>Log In</Link>
					</Typography>
				</Box>
			</Grid>
			<Grid item>
				<Box px={1}>
					<Typography variant='h5'>
						<Link to='/register'>Register </Link>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};
