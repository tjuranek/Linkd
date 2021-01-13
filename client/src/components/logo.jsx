import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	logo: {
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		letterSpacing: '0.05em'
	}
});

export const Logo = () => {
	const classes = useStyles();

	return (
		<Typography variant='h3' className={classes.logo}>
			LINKD
		</Typography>
	);
};
