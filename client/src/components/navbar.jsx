import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AccountButtons } from './account-buttons';
import { Logo } from './logo';

const useStyles = makeStyles({
	navbar: {
		backgroundColor: '#E5E5E5'
	}
});

export const Navbar = props => {
	const classes = useStyles();

	return (
		<Grid container justify='space-between' alignItems='center' xs={12}>
			<Grid item>
				<Box py={1}>
					<Logo />
				</Box>
			</Grid>
			<Grid item>
				<Box py={1}>
					<AccountButtons />
				</Box>
			</Grid>
		</Grid>
	);
};
