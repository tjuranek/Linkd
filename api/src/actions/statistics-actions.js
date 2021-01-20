import {
	createStatistic,
	getStatisticsByLink
} from '../services/statistics-service.js';

export const createStatisticAction = async (linkId, type) => {
	return await createStatistic(linkId, type);
};

export const getStatisticsByLinkAction = async linkId => {
	return await getStatisticsByLink(linkId);
};
