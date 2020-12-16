import express from 'express';
import { createLinkAction } from '../actions/links-actions.js';

export const LinksRouter = new express.Router();

LinksRouter.post('/create', async (req, res) => {
	const { url } = req.body;
	await createLinkAction(req.userId, url);

	return res.sendStatus(200);
});
