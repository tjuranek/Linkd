import moment from 'moment';

/**
 * Returns the current UTC datetime in ticks.
 */
export const getUTCDateTime = () => {
	return moment.utc().valueOf();
};
