export const AUTH_ACTIONS = {
	SET_TOKEN: 'SET_TOKEN'
};

export const addArticle = payload => {
	return { type: AUTH_ACTIONS.SET_TOKEN, payload };
};
