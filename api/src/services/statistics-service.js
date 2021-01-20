import { Link } from '../db/models/link.js';
import { Statistic } from '../db/models/statistic.js';

export const createStatistic = async (linkId, type) => {
	return await new Statistic({ linkId, type }).save();
};

export const getStatisticsByLink = async linkId => {
	return await Link.find({ linkId });
};
