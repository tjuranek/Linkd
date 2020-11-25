import { Account } from '../providers/accounts.js';

export const createAccount = async (email, password) => {
	await Account({ email, password }).save();
};

export const getAccount = async email => {
	const user = await Account.findOne({ email }).exec();
	if (user) return user;
	throw new Error('User not found.');
};
