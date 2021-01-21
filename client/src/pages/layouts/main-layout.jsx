import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../../components/navbar';

const useStyles = makeStyles({
	page: {
		backgroundImage: 'linear-gradient(#ffffff, #2d3032)',
		display: 'flex',
		padding: '0 10%',
		minHeight: '100vh',
		justifyItems: 'stretch',
		flexDirection: 'column'
	}
});

export const MainLayout = props => {
	const classes = useStyles();

	return (
		<div className={classes.page}>
			<Navbar />

			{props.children}
		</div>
	);
};
