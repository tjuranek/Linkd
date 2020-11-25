import { Router } from 'express';
import { getAccountByEmail } from '../services/accounts/queries/get-account-by-email.js';

export const AccountsRouter = new Router();

/**
 * Validates an existing access token, generates and returns a new access token with a reset expiration date.
 */
AccountsRouter.get('/token', (req, res) => {
	// get token from req header
	// return newly generated token if req token is valid
});

/**
 * Creates a new user from a given email and password, returning a newly generated access token for the user.
 */
AccountsRouter.post('/register', (req, res) => {
	// creates a new user
	// generates token
});

/**
 * Generates and returns a new access token for a user given valid credentials.
 */
AccountsRouter.post('/login', (req, res) => {
	return getAccountByEmail(req.email);
});

/**
 * Records a user logout stat.
 */
AccountsRouter.post('/logout', (req, res) => {
	// record logout event
});
