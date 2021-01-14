import { Box, Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

export const LoginForm = () => {
	return (
		<Grid container direction='column'>
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='login-form-email'
						label='Email'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='login-form-password'
						label='Password'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<Button color='primary' variant='contained' fullWidth>
						Login
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
