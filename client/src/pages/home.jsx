import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { AddLinkForm } from '../components/add-link-form';
import { MarketingCard } from '../components/marketing-card';
import { Tagline } from '../components/tagline';
import { MainLayout } from './layouts/main-layout';

export const Home = () => {
	return (
		<MainLayout>
			<Box mt={5}>
				<Tagline />
			</Box>

			<Box mt={3}>
				<AddLinkForm />
			</Box>

			<Box mt={5}>
				<Grid container xs={12} spacing={4}>
					<Grid item xs={12} md={4}>
						<MarketingCard
							title='Share Unlimited Links'
							description='You have online media, share it. With Linkd you can generate short links for as many urls as you wish.'
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<MarketingCard
							title='Visualize Engagement'
							description='We give you insight into when and where your users interact with your content.'
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<MarketingCard
							title='Create by Thomas Juranek'
							description='The not-so-self-proclaimed overthinker delivers yet another side project after deadline and with fewer features.'
						/>
					</Grid>
				</Grid>
			</Box>
		</MainLayout>
	);
};
