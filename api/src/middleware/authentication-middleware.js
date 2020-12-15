import { verifyToken } from '../services/tokens-service.js';

export const authentication = async (req, res, next) => {
	console.log(req.headers);

	const header = req.headers.authorization;
	if (!header) {
		console.log(' no head ');
		return res.sendStatus(403);
	}

	const token = header.split(' ')[1];
	const { id } = await verifyToken(token);
	console.log(id);
	if (!id) {
		console.log(' no user ');
		return res.sendStatus(403);
	}

	req.userId = id;
	next();
};
