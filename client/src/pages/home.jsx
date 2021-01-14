import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AddLinkForm } from '../components/add-link-form';
import { MarketingCard } from '../components/marketing-card';
import { Tagline } from '../components/tagline';
import { MainLayout } from './layouts/main-layout';

export const Home = () => {
	return (
		<MainLayout>
			<Tagline />
			<AddLinkForm />
			<Grid container xs={12}>
				<Grid item xs={12} md={4}>
					<MarketingCard title='test' description='testing' />
				</Grid>
				<Grid item xs={12} md={4}>
					<MarketingCard title='test' description='testing' />
				</Grid>
				<Grid item xs={12} md={4}>
					<MarketingCard title='test' description='testing' />
				</Grid>
			</Grid>
		</MainLayout>
	);
};
