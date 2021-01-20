import { apiClient } from '../../infrastructure/api-client';

const SET_STATISTICS = 'SET_STATISTICS';

const initialState = {
	statistics: []
};

export const statistics = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_STATISTICS: {
			return { ...state, statistics: action.payload };
		}
		default: {
			return state;
		}
	}
};

export const createStatistic = key => {
	return async () => {
		await apiClient.post('/statistics/create', {
			key,
			type: 1
		});
	};
};

export const getStatistics = key => {
	return async dispatch => {
		const response = await apiClient.post('/statistics/getByLink', {
			key
		});
		const { statistics } = response.data;

		dispatch({ type: SET_STATISTICS, payload: statistics });
	};
};
