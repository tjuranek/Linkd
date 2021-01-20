import { Statistic } from '../db/models/statistic.js';

export const createStatistic = async (linkKey, type) => {
	return await new Statistic({ linkKey, type }).save();
};

export const getStatisticsByLink = async linkKey => {
	return await Statistic.find({ linkKey });
};
