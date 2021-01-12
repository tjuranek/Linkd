import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppLoader } from './components/app-loader.jsx';
import { AppRouter } from './router';
import { store } from './store/index';
import 'normalize.css';

const Loading = () => <div>LOADING</div>;

render(
	<Provider store={store}>
		<AppLoader loadingComponent={<Loading />} minimumLoadingTime={2500}>
			<AppRouter />
		</AppLoader>
	</Provider>,
	document.getElementById('root')
);
