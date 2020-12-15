import express from 'express';
import {
	createGhostAccountAction,
	deleteAccountAction,
	loginAccountAction,
	registerAccountAction
} from '../actions/accounts-actions.js';

export const AccountsRouter = new express.Router();

/**
 * Creates a new ghost account, returning a new access token.
 */
AccountsRouter.post('/createghost', async (req, res) => {
	const token = await createGhostAccountAction();

	return res.status(200).json({ token });
});

/**
 * Validates login credentials, return a new access token if valid.
 */
AccountsRouter.get('/login', async (req, res) => {
	const { email, password } = req.body;
	const token = await loginAccountAction(email, password);

	return token ? res.status(200).json({ token }) : res.sendStatus(401);
});

/**
 * Converts a ghost account into a user account, saving a passed email and password, returning a new access token.
 */
AccountsRouter.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const token = await registerAccountAction(req.userId, email, password);

	return res.status(200).json({ token });
});

/**
 * Deletes an account by id.
 */
AccountsRouter.post('/delete', async (req, res) => {
	await deleteAccountAction(req.userId);

	return res.sendStatus(200);
});
