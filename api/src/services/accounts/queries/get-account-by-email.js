import { getAccount } from '../../../providers/accounts-provider.js';

export const getAccountByEmail = async email => {
	if (!email) throw new Error('Invalid email address');

	const account = await getAccount(email);

	if (!account) throw new Error('No account found');

	return account;
};
