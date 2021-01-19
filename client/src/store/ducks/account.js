import { apiClient } from '../../infrastructure/api-client';

const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';
const RESET_ACCOUNT_STATE = 'RESET_ACCOUNT_STATE';

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	isLoggedIn: false
};

export const account = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_ACCOUNT_INFO: {
			return { ...state, ...action.payload };
		}
		case RESET_ACCOUNT_STATE: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

export const registerAccount = (firstName, lastName, email, password) => {
	return async dispatch => {
		const response = await apiClient.post('/accounts/register', {
			firstName,
			lastName,
			email,
			password
		});

		const { token } = response.data;
		localStorage.setItem('token', token);

		dispatch(getAccountInfo());
	};
};

export const login = (email, password) => {
	return async dispatch => {
		const response = await apiClient.post('/accounts/login', {
			email,
			password
		});

		const { token } = response.data;
		localStorage.setItem('token', token);

		dispatch(getAccountInfo());
	};
};

export const getAccountInfo = () => {
	return async dispatch => {
		const response = await apiClient.get('/accounts/info');
		const { account } = response.data;

		if (account.type !== 1) {
			const info = {
				email: account.email,
				firstName: account.firstName,
				lastName: account.lastName
			};

			dispatch({
				type: SET_ACCOUNT_INFO,
				payload: { ...info, isLoggedIn: true }
			});
		}
	};
};

export const logout = () => {
	return dispatch => {
		localStorage.removeItem('token');

		dispatch({ type: RESET_ACCOUNT_STATE });
	};
};
