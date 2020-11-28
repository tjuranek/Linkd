import express from 'express';
import { AccountsRouter } from './accounts.js';

export const MainRouter = new express.Router();

MainRouter.use('/', AccountsRouter);
