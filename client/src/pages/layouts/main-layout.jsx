import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../../components/navbar';

const useStyles = makeStyles({
	page: {
		backgroundColor: '#E5E5E5',
		padding: '0 10%',
		minHeight: '100vh'
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
