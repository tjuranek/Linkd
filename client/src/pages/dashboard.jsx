import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { AddLinkForm } from '../components/add-link-form';
import { LinkList } from '../components/link-list';
import { MainLayout } from './layouts/main-layout';

export const Dashboard = () => {
	const firstName = useSelector(state => state.account.firstName);

	return (
		<MainLayout>
			<Grid container spacing={1} xs={12}>
				<Grid item md={6} xs={12}>
					<Card>
						<CardContent>
							<Typography variant='h5'>My Links</Typography>

							<Box my={1}>
								<LinkList />
							</Box>
						</CardContent>
					</Card>
				</Grid>

				<Grid item md={6} xs={12}>
					<Card>
						<CardContent>
							<Typography variant='h5'>Add Link</Typography>

							<Box my={1}>
								<AddLinkForm />
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};
