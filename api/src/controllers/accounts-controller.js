import express from 'express';
import { AccountsService } from '../services/accounts-service.js';

export const AccountsRouter = new express.Router();

const accountsService = new AccountsService();

AccountsRouter.get('/test', (req, res) => {
	res.send(200);
});

/**
 * Validates an existing access token, generates and returns a new access token with a reset expiration date.
 */
AccountsRouter.get('/token', (req, res) => {
	// get token from req header
	// return newly generated token if req token is valid

	throw new Error('what are you sinking about');
});

/**
 * Creates a new user from a given email and password, returning a newly generated access token for the user.
 */
AccountsRouter.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body;

		await accountsService.createAccount(email, password);
		res.sendStatus(200);
	} catch (err) {
		res.sendStatus(500);
	}
});

/**
 * Generates and returns a new access token for a user given valid credentials.
 */
AccountsRouter.post('/login', async (req, res) => {
	try {
		const account = await accountsService.getAccount(req.body.email);

		res.status(account ? 200 : 400).send({ account });
	} catch (err) {
		console.log('error here: ' + err);
		res.sendStatus(400);
	}
});

/**
 * Records a user logout stat.
 */
AccountsRouter.post('/logout', (req, res) => {
	// record logout event
});
