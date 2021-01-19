import { apiClient } from '../../infrastructure/api-client';

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
	return async () => {
		const response = await apiClient.post('/accounts/register', {
			firstName,
			lastName,
			email,
			password
		});

		debugger;
	};
};

export const getAccountInfo = () => {
	return async dispatch => {
		const response = await apiClient.get('/acounts/info');
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
