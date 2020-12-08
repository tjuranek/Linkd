import express from 'express';
import validator from 'express-validator';
import { AccountsService } from '../services/accounts-service.js';
import { PasswordService } from '../services/password-service.js';
import { TokensService } from '../services/tokens-service.js';

export const AccountsRouter = new express.Router();

const { body, validationResult } = validator;

const validateUserMiddleware = body('email').isEmail(), body('password').isLength({ min: 8, max: 64 });
const throwIfErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	next();
};

AccountsRouter.use(throwIfErrors);

/**
 * Creates a new user from a given email and password, returning a newly generated access token for the user.
 */
AccountsRouter.post('/register', async (req, res) => {
	const { email, password } = req.body;
	const hash = await passwordService.generatePassword(password);
	const { _id } = await accountsService.createAccount(email, hash);
	const token = await tokensService.generateToken({ id: _id });

	return res.status(200).json({ token });
});

/**
 * Generates and returns a new access token for a user given valid credentials.
 */
AccountsRouter.post(
	'/login',
	[validateUserMiddleware],
	async (req, res) => {
		

		const { email, password } = req.body;
		const account = await accountsService.getAccount(email);
		const isValidPassword = await passwordService.verifyPassword(password, account.password);

		if (isValidPassword) {
			const token = await tokensService.generateToken({
				id: account._id
			});
			return res.status(200).json({ token });
		}

		return res.sendStatus(400);
	}
);
