import { Grid, makeStyles } from '@material-ui/core';
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
		<Grid container xs={12}>
			<Grid item xs={3}>
				<Logo />
			</Grid>
			<Grid item xs={9}>
				<AccountButtons />
			</Grid>
		</Grid>
	);
};
