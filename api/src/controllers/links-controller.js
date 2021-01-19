import express from 'express';
import {
	createLinkAction,
	deleteLinkAction,
	getLinkByKeyAction,
	getLinksByAccountAction
} from '../actions/links-actions.js';

export const LinksRouter = new express.Router();

/**
 * Creates a new link from a given url.
 */
LinksRouter.post('/create', async (req, res) => {
	const { url } = req.body;
	const link = await createLinkAction(req.userId, url);

	return res.status(200).json({ link });
});

/**
 * Retrieves a link by it's key.
 */
LinksRouter.post('/getByKey', async (req, res) => {
	const { key } = req.body;
	const link = await getLinkByKeyAction(key);

	return res.status(200).json({ link });
});

/**
 * Retrieves links by their account id.
 */
LinksRouter.get('/getByAccount', async (req, res) => {
	const links = await getLinksByAccountAction(req.userId);

	return res.status(200).json({ links });
});

/**
 * Deletes a link by id.
 */
LinksRouter.post('/delete', async (req, res) => {
	const { id } = req.body;
	await deleteLinkAction(id);

	return res.sendStatus(200);
});
