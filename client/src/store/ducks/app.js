import axios from 'axios';

const SET_IS_LOADED = 'SET_IS_LOADED';

const initialState = {
	isLoaded: false
};

export const app = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_IS_LOADED: {
			return { ...state, isLoaded: true };
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
			url: `${process.env.API_URL}/accounts/createghost`
		});

		const token = response.data.token;

		localStorage.setItem('token', token);
		dispatch({ type: SET_IS_LOADED, payload: { token } });
	};
};

export const setToken = token => {
	return { type: SET_IS_LOADED, payload: { token, isLoaded: true } };
};
