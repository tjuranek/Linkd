import {
	createGhostAccount,
	registerAccount
} from '../services/accounts-service.js';
import {
	generatePassword,
	verifyPassword
} from '../services/password-service.js';
import { generateToken } from '../services/tokens-service.js';

/**
 * Creates a new ghost account, returning a new access token.
 */
export const createGhostAccountAction = async () => {
	const { id } = await createGhostAccount();

	return await generateToken(id);
};

export const registerAccountAction = async (id, email, password) => {
	const hash = await generatePassword(password);
	await registerAccount(id, email, hash);

	return await generateToken(id);
};
