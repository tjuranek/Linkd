import express from 'express';
import {
	createStatisticAction,
	getStatisticsByLinkAction
} from '../actions/statistics-actions.js';

export const StatisticsRouter = new express.Router();

StatisticsRouter.post('/create', async (req, res) => {
	const { key, type } = req.body;
	await createStatisticAction(key, type);

	return res.sendStatus(200);
});

StatisticsRouter.post('/getByLink', async (req, res) => {
	const { key } = req.body;
	const statistics = await getStatisticsByLinkAction(key);

	return res.status(200).json({ statistics });
});
