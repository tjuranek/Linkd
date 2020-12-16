import { compose, combineReducers, createStore } from 'redux';
import { app } from './ducks/app';

const rootReducer = combineReducers({ app });

export const store = createStore(
	rootReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
