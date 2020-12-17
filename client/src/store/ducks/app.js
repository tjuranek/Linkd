import axios from 'axios';

const SET_TOKEN = 'SET_TOKEN';

const initialState = {
	token: ''
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

export const setToken = () => {
	return async dispatch => {
		const response = await axios({
			method: 'post',
			url: 'http://localhost:1234/accounts/createghost'
		});

		const token = response.data.token;

		dispatch({ type: SET_TOKEN, payload: { token } });
	};
};
