import { Grid } from '@material-ui/core';
import React from 'react';
import { AddLinkForm } from '../components/add-link-form';
import { MarketingCard } from '../components/marketing-card';
import { Navbar } from '../components/navbar';
import { Tagline } from '../components/tagline';

export const Home = () => {
	return (
		<div>
			<Navbar />

			<Tagline />

			<AddLinkForm />

			<Grid container spacing={3}>
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
		</div>
	);
};
