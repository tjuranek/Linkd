import { store } from './store';
import { getToken, setToken } from './store/ducks/app';

export const initializeApp = () => {
	const lsToken = localStorage.getItem('token');
	lsToken ? store.dispatch(setToken(lsToken)) : store.dispatch(getToken());
};
