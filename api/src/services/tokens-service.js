import jwt from 'jsonwebtoken';

const tokenDuration = process.env.TOKEN_DURATION;
const tokenSecret = process.env.TOKEN_SECRET;

export const generateToken = async id => {
	return await jwt.sign({ id }, tokenSecret, {
		expiresIn: tokenDuration
	});
};

export const verifyToken = async token => {
	return await jwt.verify(token, tokenSecret);
};
