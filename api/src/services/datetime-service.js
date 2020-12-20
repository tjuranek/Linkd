import moment from 'moment';

/**
 * Returns the current UTC datetime in ticks.
 */
export const getUTCDateTime = () => {
	// TODO: new Date().toUTCString()
	return moment.utc().valueOf();
};
