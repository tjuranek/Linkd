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

/**
 * Finds and returns a link by key.
 *
 * @param {String} key
 */
export const getLinkByKey = async key => {
	return await Link.findOne({ key });
};

/**
 * Finds and returns links by account id.
 * @param {String} accountId
 */
export const getLinksByAccount = async accountId => {
	return await Link.find({ accountId });
};

/**
 * Deletes a link by id.
 *
 * @param {String} id
 */
export const deleteLink = async id => {
	await Link.findByIdAndUpdate(id, { dateDeleted: getUTCDateTime() });
	``;
};
