import { Account } from '../db/models/account.js';

/**
 * Responsible for all transactions reading and writing to the accounts table.
 */
export class AccountsProvider {
	/**
	 * Creates a new account with a provided email and password, returning the created object.
	 *
	 * @param {string} email
	 * @param {string} password
	 */
	createAccount = async (email, password) => {
		return await Account({ email, password }).save();
	};

	/**
	 * Gets an account by email.
	 *
	 * @param {string} email
	 */
	getAccount = async email => {
		return await Account.findOne({ email }).exec();
	};
}
