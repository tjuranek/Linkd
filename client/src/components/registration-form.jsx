import { Box, Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

export const RegistrationForm = () => {
	return (
		<Grid container direction='column'>
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='registration-form-first-name'
						label='First Name'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<TextField
						id='registration-form-last-name'
						label='Last Name'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<TextField
						id='registration-form-email'
						label='Email'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<TextField
						id='registration-form-password'
						label='Password'
						variant='outlined'
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<Button color='primary' variant='contained' fullWidth>
						Register
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
