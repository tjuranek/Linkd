import { store } from './index';
import { getToken, setToken } from './ducks/app';

export const hydrateStore = () => {
	const token = localStorage.getItem('token');
	token ? store.dispatch(setToken(token)) : store.dispatch(getToken());
};
