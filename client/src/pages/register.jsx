import { makeStyles } from '@material-ui/core';
import React from 'react';
import { RegistrationForm } from '../components/registration-form';
import { MainLayout } from './layouts/main-layout';

const useStyles = makeStyles({
	content: {
		alignItems: 'center',
		display: 'flex',
		flexGrow: '1',
		justifyContent: 'center'
	}
});
export const Register = () => {
	const classes = useStyles();

	return (
		<MainLayout>
			<div className={classes.content}>
				<RegistrationForm />
			</div>
		</MainLayout>
	);
};
