import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles({
	link: {
		color: '#8B8BEA',
		textDecoration: 'none'
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
