import { apiClient } from '../../infrastructure/api-client';

const SET_IS_LOADED = 'SET_IS_LOADED';

const initialState = {
	isLoaded: false
};

export const app = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_IS_LOADED: {
			return { ...state, ...action.payload };
		}
		default: {
			return state;
		}
	}
};

export const getToken = () => {
	return async () => {
		const response = await apiClient.get(`/accounts/createghost`);
		const { token } = response.data;

		localStorage.setItem('token', token);
	};
};

export const setIsLoaded = isLoaded => {
	return async dispatch => {
		dispatch({ type: SET_IS_LOADED, payload: { isLoaded } });
	};
};
