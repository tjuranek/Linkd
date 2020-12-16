import { Account } from '../db/models/account.js';
import { Link } from '../db/models/link.js';
import { getUTCDateTime } from '../services/datetime-service.js';

/**
 * Creates and returns a new link record.
 *
 * @param {Number} accountId
 * @param {String} url
 */
export const createLink = async (accountId, url) => {
	return await new Link({ accountId, url }).save();
};
