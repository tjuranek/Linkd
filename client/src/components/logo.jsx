import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from './link';

const useStyles = makeStyles({
	logo: {
		fontFamily: 'Montserrat',
		fontWeight: 'bolder',
		letterSpacing: '0.05em'
	},
	link: {
		color: 'black'
	}
});

export const Logo = () => {
	const classes = useStyles();

	return (
		<Typography variant='h3' className={classes.logo}>
			<Link to='/'>
				<span className={classes.link}>LINKD</span>
			</Link>
		</Typography>
	);
};
