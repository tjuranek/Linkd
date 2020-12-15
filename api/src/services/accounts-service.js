import { Account } from '../db/models/account.js';
import { ACCOUNT_TYPES } from '../constants/account-types.js';

export const createGhostAccount = async () => {
	return await new Account().save();
};

export const registerAccount = async (id, email, password) => {
	await Account.findByIdAndUpdate(id, { email, password });
};
