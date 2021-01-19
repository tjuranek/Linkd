import React from 'react';
import { useSelector } from 'react-redux';
import { MainLayout } from './layouts/main-layout';

export const Dashboard = () => {
	const firstName = useSelector(state => state.account.firstName);

	return (
		<MainLayout>
			<p>{firstName}</p>
		</MainLayout>
	);
};
