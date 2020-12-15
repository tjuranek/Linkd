import { Account } from '../db/models/account.js';
import { ACCOUNT_TYPES } from '../constants/account-types.js';
import { getUTCDateTime } from '../services/datetime-service.js';

/**
 * Creates and returns a new ghost account.
 */
export const createGhostAccount = async () => {
	return await new Account().save();
};

/**
 * Finds and returns an account by email.
 *
 * @param {String} email
 */
export const getAccountByEmail = async email => {
	return await Account.findOne({ email });
};

/**
 * Converts a ghost account into a new user account.
 *
 * @param {Number} id
 * @param {String} email
 * @param {String} password
 */
export const registerAccount = async (id, email, password) => {
	await Account.findByIdAndUpdate(id, {
		dateRegistered: getUTCDateTime(),
		email,
		password,
		type: ACCOUNT_TYPES.USER
	});
};

/**
 * Deletes an account by id.
 *
 * @param {Number} id
 */
export const deleteAccount = async id => {
	await Account.findByIdAndUpdate(id, { dateDeleted: getUTCDateTime() });
};
