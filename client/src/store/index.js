import { compose, createStore } from 'redux';
import { authReducer } from '../reducers/auth';

const initialState = {};

export const store = createStore(
	authReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
