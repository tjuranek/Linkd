import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export const MarketingCard = props => {
	const { title, description } = props;

	return (
		<Box m={1}>
			<Card>
				<CardContent>
					<Typography variant='h5'>{title}</Typography>
					<Typography variant='p'>{description}</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};