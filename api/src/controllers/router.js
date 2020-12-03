import express from 'express';
import { authentication } from '../middleware/authentication-middleware.js';
import { errorHandler } from '../middleware/error-handler-middleware.js';
import { AccountsRouter } from './accounts-controller.js';

export const MainRouter = new express.Router();

//MainRouter.use(authentication);

MainRouter.use('/accounts', AccountsRouter);

MainRouter.get('/test', (req, res) => {
	throw new Error('testingtesting123');
});

MainRouter.use(errorHandler);
