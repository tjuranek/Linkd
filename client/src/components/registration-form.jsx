import { Box, Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const FIELDS = {
	FirstName: 'firstName',
	LastName: 'lastName',
	Email: 'email',
	Password: 'password'
};

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	errors: [FIELDS.FirstName, FIELDS.LastName, FIELDS.Email, FIELDS.Password],
	showErrors: false
};

export const RegistrationForm = () => {
	const [state, setState] = useState(initialState);

	const validate = updates => {
		const futureState = { ...state, ...updates };
		let errors = [];

		for (const field in FIELDS) {
			if (!futureState[FIELDS[field]]) {
				errors.push(FIELDS[field]);
			}
		}

		return errors;
	};

	const setValue = (type, value) => {
		const updates = { [type]: value };
		const errors = validate(updates);

		setState({ ...state, ...updates, ...{ errors } });
	};

	const submit = () => {
		state.errors.length
			? setState({ ...state, showErrors: true })
			: alert('submit');
	};

	return (
		<Grid container direction='column'>
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='registration-form-first-name'
						label='First Name'
						variant='outlined'
						onChange={e =>
							setValue(FIELDS.FirstName, e.target.value)
						}
						error={
							state.showErrors &&
							state.errors.includes(FIELDS.FirstName)
						}
						helperText={
							state.showErrors &&
							state.errors.includes(FIELDS.FirstName) &&
							'Please enter a valid first name.'
						}
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
						onChange={e =>
							setValue(FIELDS.LastName, e.target.value)
						}
						error={
							state.showErrors &&
							state.errors.includes(FIELDS.LastName)
						}
						helperText={
							state.showErrors &&
							state.errors.includes(FIELDS.LastName) &&
							'Please enter a valid last name.'
						}
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
						onChange={e => setValue(FIELDS.Email, e.target.value)}
						error={
							state.showErrors &&
							state.errors.includes(FIELDS.Email)
						}
						helperText={
							state.showErrors &&
							state.errors.includes(FIELDS.Email) &&
							'Please enter a valid email.'
						}
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
						onChange={e =>
							setValue(FIELDS.Password, e.target.value)
						}
						error={
							state.showErrors &&
							state.errors.includes(FIELDS.Password)
						}
						helperText={
							state.showErrors &&
							state.errors.includes(FIELDS.Password) &&
							'Please enter a password.'
						}
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
						Register
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
