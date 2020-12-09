import express from 'express';
import {
	createAccount,
	getAccountByEmail
} from '../services/accounts-service.js';
import {
	generatePassword,
	verifyPassword
} from '../services/password-service.js';
import { generateToken } from '../services/tokens-service.js';

export const AccountsRouter = new express.Router();

/**
 * Creates a new user from a given email and password, returning a newly generated access token for the user.
 */
AccountsRouter.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const hash = await generatePassword(password);
	const { _id } = await createAccount(email, hash);
	const token = await generateToken({ id: _id });

	return res.status(200).json({ token });
});

/**
 * Generates and returns a new access token for a user given valid credentials.
 */
AccountsRouter.post('/login', async (req, res) => {
	const { email, password } = req.body;
	const account = await getAccountByEmail(email);
	const isValidPassword = await verifyPassword(password, account.password);

	if (isValidPassword) {
		const token = await generateToken({
			id: account._id
		});
		return res.status(200).json({ token });
	}

	return res.sendStatus(400);
});
