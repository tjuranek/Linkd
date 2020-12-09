import { verifyToken } from '../services/tokens-service.js';

export const authentication = async (req, res, next) => {
	const header = req.headers.authentication;
	if (!header) {
		console.log(' no head ');
		return res.sendStatus(403);
	}

	const token = header.split(' ')[1];
	const user = await verifyToken(token);
	if (!user) {
		console.log(' no user ');
		return res.sendStatus(403);
	}

	req.user = user;
	next();
};
