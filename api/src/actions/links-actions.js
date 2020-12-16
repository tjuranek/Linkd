import { createLink } from '../services/links-service.js';

/**
 * Creates a new link record.
 *
 * @param {Number} accountId
 * @param {String} url
 */
export const createLinkAction = async (accountId, url) => {
	await createLink(accountId, url);
};
