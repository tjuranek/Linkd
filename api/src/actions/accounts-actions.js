import {
	createGhostAccount,
	deleteAccount,
	getAccountByEmail,
	getAccountById,
	registerAccount
} from '../services/accounts-service.js';
import { sendEmail } from '../services/email-service.js';
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
	const html = `<strong>Your id is: ${id}</strong>`;
	//await sendEmail(html);

	return await generateToken(id);
};

/**
 * Validates login credentials, returning a new access token if valid.
 *
 * @param {String} email
 * @param {String} password
 */
export const loginAccountAction = async (email, password) => {
	const account = await getAccountByEmail(email);
	const isValidPassword = await verifyPassword(password, account.password);

	return isValidPassword ? await generateToken(account.id) : undefined;
};

export const getAccountInfoAction = async id => {
	return await getAccountById(id);
};

/**
 * Converts a ghost account into a user account, returning a new access token.
 *
 * @param {Number} id
 * @param {String} email
 * @param {String} firstName
 * @param {String} lastName
 * @param {String} password
 */
export const registerAccountAction = async (
	id,
	email,
	firstName,
	lastName,
	password
) => {
	const hash = await generatePassword(password);
	await registerAccount(id, email, firstName, lastName, hash);

	return await generateToken(id);
};

/**
 * Deletes an account by id.
 *
 * @param {Number} id
 */
export const deleteAccountAction = async id => {
	await deleteAccount(id);
};
