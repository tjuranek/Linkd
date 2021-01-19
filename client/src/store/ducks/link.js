import { apiClient } from '../../infrastructure/api-client';

const SET_LAST_CREATED_LINK = 'SET_LAST_CREATED_LINK';
const SET_LAST_RETRIEVED_LINK = 'SET_LAST_RETRIEVED_LINK';
const SET_LINKS = 'SET_LINKS';

const initialState = {
	lastCreatedLink: {},
	lastRetrievedLink: {},
	links: []
};

export const links = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_LAST_CREATED_LINK: {
			return { ...state, lastCreatedLink: action.payload };
		}
		case SET_LAST_RETRIEVED_LINK: {
			return { ...state, lastRetrievedLink: action.payload };
		}
		case SET_LINKS: {
			return { ...state, links: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const createLink = url => {
	return async dispatch => {
		const response = await apiClient.post('/links/create', { url });
		const { link } = response.data;

		dispatch({ type: SET_LAST_CREATED_LINK, payload: link });
	};
};

export const getLinkByKey = key => {
	return async dispatch => {
		const response = await apiClient.post('/links/getByKey', {
			key
		});
		const { link } = response.data;

		debugger;

		dispatch({ type: SET_LAST_RETRIEVED_LINK, payload: link });
	};
};

export const getLinksByAccount = () => {
	return async dispatch => {
		const response = await apiClient.get('/links/getByAccount');
		const { links } = response.data;

		dispatch({ type: SET_LINKS, payload: links });
	};
};
