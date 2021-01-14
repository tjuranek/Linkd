import axios from 'axios';
import { setToken } from './app';

const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';

const initialState = {
	id: '',
	firstName: '',
	lastName: '',
	email: ''
};

export const account = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_ACCOUNT_INFO: {
			return { ...state, ...action.payload };
		}
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
			url: `${process.env.API_URL}/accounts/register`,
			data: {
				email: 'test@test.com',
				firstName: 'hypa',
				lastName: 'hypa',
				password: 'password'
			},
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});

		dispatch(setToken(response.data.token));
	};
};

export const getAccountInfo = () => {
	return async (dispatch, getState) => {
		const state = getState();
		const token = state.app.token;

		const response = await axios({
			method: 'get',
			url: `${process.env.API_URL}/accounts/info`,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		});

		debugger;

		const { account } = response.data;

		const info = {
			id: account.id,
			email: account.email,
			firstName: account.firstName,
			lastName: account.lastName
		};

		dispatch({ type: SET_ACCOUNT_INFO, payload: info });
	};
};
