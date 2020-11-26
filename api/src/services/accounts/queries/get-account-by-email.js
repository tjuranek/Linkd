import { getAccount } from '../../../providers/accounts.js';

export const getAccountByEmail = async email => {
	if (!email) throw new Error('Invalid email address');

	return await getAccount(email);
};
