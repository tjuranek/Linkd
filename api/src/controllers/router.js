import express from 'express';
import { authentication } from '../middleware/authentication-middleware.js';
import { AccountsRouter } from './accounts-controller.js';

export const MainRouter = new express.Router();

MainRouter.use(authentication);
MainRouter.use('/accounts', AccountsRouter);
