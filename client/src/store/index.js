import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { account } from './ducks/account';
import { app } from './ducks/app';

const rootReducer = combineReducers({ account, app });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(thunk))
);
