import axios from 'axios';
import { setToken } from './app';

const initialState = {
	id: '',
	firstName: '',
	lastName: '',
	email: ''
};

export const account = (state = initialState, action = {}) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};

export const registerAccount = (firstName, lastName, email, password) => {
	return async (dispatch, getState) => {
		const state = getState();
		const token = state.app.token;

		const response = await axios({
			method: 'post',
			url: 'https://linkd-api.herokuapp.com/accounts/register',
			data: { email: 'test@test.com', password: 'password' },
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});

		dispatch(setToken(response.data.token));
	};
};
