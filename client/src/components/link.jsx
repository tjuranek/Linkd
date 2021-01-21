import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles({
	link: {
		color: '#9615db',
		textDecoration: 'none',
		'&:hover': {
			color: '#7810AF',
			fontWeight: 'bold'
		}
	}
});

export const Link = props => {
	const { to } = props;
	const classes = useStyles();

	return (
		<RouterLink className={classes.link} to={to}>
			{props.children}
		</RouterLink>
	);
};
