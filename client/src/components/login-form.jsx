import { Box, Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../store/ducks/account';

const FIELDS = {
	Email: 'email',
	Password: 'password'
};

const initialState = {
	email: '',
	password: '',
	errors: [FIELDS.Email, FIELDS.Password],
	showErrors: false
};

export const LoginForm = () => {
	const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();

	const validate = updates => {
		const futureState = { ...state, ...updates };
		let errors = [];

		for (const field in FIELDS) {
			if (!futureState[field.toLowerCase()]) {
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
			: (() => {
					dispatch(login(state.email, state.password));
					history.push('/dashboard');
			  })();
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
			<Grid item fullWidth>
				<Box my={1}>
					<TextField
						id='login-form-password'
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
						Login
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
