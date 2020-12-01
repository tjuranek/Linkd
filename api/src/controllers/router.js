import express from 'express';
import { AccountsRouter } from './accounts-controller.js';

export const MainRouter = new express.Router();

const error = (err, req, res, next) => {
	console.log(err);

	res.status(500).json({ error: 'you a ho' });
};

const testing = (req, res, next) => {
	console.log('testing');
	next();
};
MainRouter.use(testing);
MainRouter.use(error);

MainRouter.use('/accounts', AccountsRouter);
linked;
