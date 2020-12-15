import { verifyToken } from '../services/tokens-service.js';

export const authentication = async (req, res, next) => {
	const header = req.headers.authorization;
	if (!header) {
		return res.sendStatus(403);
	}

	const token = header.split(' ')[1];
	const { id } = await verifyToken(token);
	if (!id) {
		return res.sendStatus(403);
	}

	req.userId = id;
	next();
};
