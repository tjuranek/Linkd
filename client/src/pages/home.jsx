import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { AddLinkForm } from '../components/add-link-form';
import { MarketingCard } from '../components/marketing-card';
import { Navbar } from '../components/navbar';
import { Tagline } from '../components/tagline';
import { MainLayout } from './layouts/main-layout';

const useStyles = makeStyles({
	page: {
		backgroundColor: '#E5E5E5',
		minHeight: '100vh'
	}
});

export const Home = () => {
	const classes = useStyles();

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
	/* 	return (
		<div className={classes.page}>
			<Navbar />

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
		</div>
	); */
};
