import express from 'express';
import {
	createGhostAccountAction,
	registerAccountAction
} from '../actions/accounts-actions.js';

export const AccountsRouter = new express.Router();

/**
 * Creates a new ghost account, returning a new access token.
 */
AccountsRouter.post('/create/ghost', async (req, res) => {
	const token = await createGhostAccountAction();
	return res.status(200).json({ token });
});

/**
 * Converts a ghost account into a user account, saving a passed email and password, returning a new access token.
 */
AccountsRouter.post('/register', async (req, res) => {
	//const { userId } = req.userId;
	const userId = '5fd829f26f5a6e4ad0b043a5';
	const { email, password } = req.body;

	const token = await registerAccountAction(userId, email, password);
	return res.status(200).json({ token });
});

/**
 * Generates and returns a new access token for a user given valid credentials.
 */
/* AccountsRouter.post('/login', async (req, res) => {
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
}); */
