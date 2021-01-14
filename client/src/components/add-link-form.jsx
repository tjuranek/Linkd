import { Box, Button, Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	input: {
		border: '2px solid black'
	},
	button: {
		height: '100%'
	}
});

export const AddLinkForm = props => {
	const classes = useStyles();
	return (
		<Grid container justify='flex-start' alignItems='stretch' xs={12}>
			<Grid item xs={4}>
				<TextField
					id='add-link-form-textfield'
					label='URL'
					variant='outlined'
					size='small'
					fullWidth
					InputProps={{
						classes: {
							notchedOutline: classes.input
						}
					}}
				/>
			</Grid>
			<Grid item>
				<Box ml={1} height='100%'>
					<Button
						className={classes.button}
						color='primary'
						variant='contained'
					>
						Shorten
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
