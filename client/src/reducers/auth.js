import { AUTH_ACTIONS } from '../actions/auth';

const initialState = {
	token: ''
};

export const authReducer = (state = initialState, action) => {
	if (action.type == AUTH_ACTIONS.SET_TOKEN) {
		return { ...state, ...action.payload };
	}

	return state;
};
