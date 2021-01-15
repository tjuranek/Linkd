import { store } from './index';
import { getToken, setIsLoaded } from './ducks/app';

export const hydrateStore = () => {
	const token = localStorage.getItem('token');

	if (token) {
		store.dispatch(setIsLoaded(true));
	} else {
		store.dispatch(getToken());
		store.dispatch(setIsLoaded(true));
	}
};
