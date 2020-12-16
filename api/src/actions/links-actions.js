import {
	createLink,
	getLinkByKey,
	getLinksByAccount,
	deleteLink
} from '../services/links-service.js';

/**
 * Creates a new link record.
 *
 * @param {Number} accountId
 * @param {String} url
 */
export const createLinkAction = async (accountId, url) => {
	await createLink(accountId, url);
};

/**
 * Gets a link by it's key.
 *
 * @param {String} key
 */
export const getLinkByKeyAction = async key => {
	return await getLinkByKey(key);
};

/**
 * Gets links by their account id.
 *
 * @param {String} accountId
 */
export const getLinksByAccountAction = async accountId => {
	return await getLinksByAccount(accountId);
};

/**
 * Deletes a link by it's id.
 *
 * @param {String} id
 */
export const deleteLinkAction = async id => {
	await deleteLink(id);
};
