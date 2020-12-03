export const errorHandler = (err, req, res, next) => {
	console.log('An error occurred.');
	console.log(err);

	res.sendStatus(500);
};
