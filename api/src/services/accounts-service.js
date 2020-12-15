import { Account } from '../db/models/account.js';

export const createGhostAccount = async () => {
	return new Account().save();
};

export const createAccount = async (email, password) => {
	return await Account({ email, password }).save();
};

export const getAccountByEmail = async email => {
	return await Account.findOne({ email }).exec();
};
