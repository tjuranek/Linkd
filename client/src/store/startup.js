import { store } from './index';
import { getToken, setIsLoaded } from './ducks/app';
import { getAccountInfo } from './ducks/account';

export const hydrateStore = () => {
	const token = localStorage.getItem('token');

	if (token) {
		store.dispatch(getAccountInfo());
		store.dispatch(setIsLoaded(true));
	} else {
		store.dispatch(getToken());
		store.dispatch(setIsLoaded(true));
	}
};
