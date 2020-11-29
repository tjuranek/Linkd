import express from 'express';
import { AccountsRouter } from './accounts-controller.js';

export const MainRouter = new express.Router();

MainRouter.use('/', AccountsRouter);
