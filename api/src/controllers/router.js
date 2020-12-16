import express from 'express';
import unless from 'express-unless';
import { authentication } from '../middleware/authentication-middleware.js';
import { errorHandler } from '../middleware/error-handler-middleware.js';
import { AccountsRouter } from './accounts-controller.js';
import { LinksRouter } from './links-controller.js';

export const MainRouter = new express.Router();

authentication.unless = unless;
MainRouter.use(authentication.unless({ path: ['/accounts/createghost'] }));

MainRouter.use('/accounts', AccountsRouter);
MainRouter.use('/links', LinksRouter);

MainRouter.use(errorHandler);
