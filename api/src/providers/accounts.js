import { Account } from '../db/models/account.js';

export const createAccount = async (email, password) => {
	await Account({ email, password }).save();
};

export const getAccount = async email => {
	return await Account.findOne({ email }).exec();
};
