import { Box, Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const FIELDS = {
	Email: 'Email',
	Password: 'Password'
};

const initialState = {
	email: '',
	password: '',
	errors: [FIELDS.Email, FIELDS.Password],
	showErrors: false
};

export const LoginForm = () => {
	const [state, setState] = useState(initialState);

	const validate = updates => {
		const futureState = { ...state, ...updates };
		const errors = [];

		for (field of FIELDS) {
			if (!futureState[field.ToLowercase()]) {
				errors.push(FIELDS[field]);
			}
		}

		return errors;
	};

	const setValue = (type, value) => {
		const updates = {};
		switch (type) {
			case FIELDS.Email:
				updates = { email: value };
			case FIELDS.Password:
				updates = { password: value };
		}

		const errors = validate(updates);

		setState({ ...state, ...updates, ...errors });
	};

	const submit = () => {
		state.errors
			? setState({ ...state, showErrors: true })
			: alert('submit');
	};

	return (
		<Grid container direction='column'>
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='login-form-email'
						label='Email'
						variant='outlined'
						onChange={e => setValue(FIELDS.Email, e.target.value)}
						error={state.errors.includes(FIELDS.Email)}
						helperText='MAKE IT VALID YOU DUMB GOAT'
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
						onChange={e =>
							setValue(FIELDS.Password, e.target.value)
						}
						error={state.errors.includes(FIELDS.Password)}
						helperText='MAKE IT VALID YOU DUMB GOAT'
						error={state.password.error}
						helperText={state.password.error}
						fullWidth
					/>
				</Box>
			</Grid>

			<Grid item>
				<Box my={1}>
					<Button
						color='primary'
						variant='contained'
						fullWidth
						onClick={submit}
					>
						Login
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
