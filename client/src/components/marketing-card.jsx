import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	card: {
		height: '100%',
		boxShadow: 'none'
	}
});

export const MarketingCard = props => {
	const { title, description } = props;

	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant='h5'>{title}</Typography>
				<Typography variant='p'>{description}</Typography>
			</CardContent>
		</Card>
	);
};
