// todo: set as env variable
const tokenKey = 'auth-token';

export const saveToken = token => {
	if (!token) {
		throw new Error('Cannot save an empty token.');
	}

	localStorage.setItem(tokenKey, token);
};

export const getToken = () => {
	const token = localStorage.getItem(tokenKey);
};
