import { createAccount as createNewAccount } from '../../../providers/accounts-provider.js';

export const createAccount = async (email, password) => {
	await createNewAccount(email, password);
};
