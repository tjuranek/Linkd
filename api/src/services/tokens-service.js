import jwt from 'jsonwebtoken';

const tokenDuration = process.env.TOKEN_DURATION;
const tokenSecret = process.env.TOKEN_SECRET;

export class TokensService {
	generateToken = async user => {
		return await jwt.sign(user, tokenSecret, {
			expiresIn: tokenDuration
		});
	};

	verifyToken = async token => {
		return await jwt.verify(token, this.tokenSecret);
	};
}
