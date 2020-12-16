const SET_TOKEN = 'SET_TOKEN';

const initialState = {
	token: ''
};

export const app = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_TOKEN: {
			return { ...state, token: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const setToken = token => {
	return { type: SET_TOKEN, token };
};
