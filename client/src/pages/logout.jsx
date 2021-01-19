import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { MainLayout } from './layouts/main-layout';
import { logout } from '../store/ducks/account';
import { getToken } from '../store/ducks/app';

export const Logout = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(logout());
		dispatch(getToken());
		history.push('/');
	}, []);

	return (
		<MainLayout>
			<p>Logging you out...</p>
		</MainLayout>
	);
};
