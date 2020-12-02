import jwt from 'jsonwebtoken';

export class TokensService {
	constructor() {
		this.tokenDuration = process.env.TOKEN_DURATION;
		this.tokenSecret = process.env.TOKEN_SECRET;
	}

	generateToken = async user => {
		return await jwt.sign(user, this.tokenSecret, {
			expiresIn: this.tokenDuration
		});
	};

	verifyToken = async token => {
		return await jwt.verify(token, this.tokenSecret);
	};
}
