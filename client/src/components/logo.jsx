import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	logo: {
		fontFamily: 'Montserrat'
	}
});

export const Logo = () => {
	const classes = useStyles();

	return (
		<Typography variant='h2' className={classes.logo}>
			LINKD
		</Typography>
	);
};
