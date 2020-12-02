export const logger = (req, res, next) => {
	console.log();
	console.log('Request Received ');
	console.log(`Route: ${req.originalUrl}`);
	console.log(`Body: ${JSON.stringify(req.body)}`);

	next();
};
