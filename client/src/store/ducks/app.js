import axios from 'axios';

const SET_TOKEN = 'SET_TOKEN';

const initialState = {
	token: '',
	isLoaded: false
};

export const app = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TOKEN: {
			return { ...state, ...action.payload };
		}
		default: {
			return state;
		}
	}
};

export const getToken = () => {
	return async dispatch => {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:1234/accounts/createghost'
		});

		const token = response.data.token;

		localStorage.setItem('token', token);
		dispatch({ type: SET_TOKEN, payload: { token } });
	};
};

export const setToken = token => {
	return { type: SET_TOKEN, payload: { token, isLoaded: true } };
	// todo: call check ready
};

// todo: determine if both apis are loaded with a checkReady() function
