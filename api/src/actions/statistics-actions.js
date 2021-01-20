import {
	createStatistic,
	getStatisticsByLink
} from '../services/statistics-service.js';

export const createStatisticAction = async (linkKey, type) => {
	return await createStatistic(linkKey, type);
};

export const getStatisticsByLinkAction = async linkKey => {
	return await getStatisticsByLink(linkKey);
};
