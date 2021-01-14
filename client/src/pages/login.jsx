import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { LoginForm } from '../components/login-form';
import { MainLayout } from './layouts/main-layout';

const useStyles = makeStyles({
	content: {
		alignItems: 'center',
		display: 'flex',
		flexGrow: '1',
		justifyContent: 'center'
	}
});

export const Login = () => {
	const classes = useStyles();

	return (
		<MainLayout>
			<div className={classes.content}>
				<Grid
					container
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<Grid item>
						<p>Welcome back!</p>
					</Grid>

					<Grid item>
						<Box mt={1}>
							<LoginForm />
						</Box>
					</Grid>
				</Grid>
			</div>
		</MainLayout>
	);
};
