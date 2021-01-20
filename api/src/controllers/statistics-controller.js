import express from 'express';
import {
	createStatisticAction,
	getStatisticsByLinkAction
} from '../actions/statistics-actions.js';

export const StatisticsRouter = new express.Router();

StatisticsRouter.post('/create', async (req, res) => {
	const { linkId, type } = req.body;
	await createStatisticAction(linkId, type);

	return res.sendStatus(200);
});

StatisticsRouter.post('/getByLink', async (req, res) => {
	const { linkId } = req.body;
	const statistics = await getStatisticsByLinkAction(linkId);

	return res.status(200).json({ statistics });
});
