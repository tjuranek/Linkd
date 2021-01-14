import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppLoader } from './components/app-loader.jsx';
import { AppRouter } from './router';
import { store } from './store/index';
import 'normalize.css';
import './lib/Montserrat-Regular.ttf';
import './index.css';

render(
	<Provider store={store}>
		<AppLoader minimumLoadingTime={500}>
			<AppRouter />
		</AppLoader>
	</Provider>,
	document.getElementById('root')
);
