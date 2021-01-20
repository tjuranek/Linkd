import {
	Box,
	Button,
	Grid,
	makeStyles,
	TextField,
	Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLink } from '../store/ducks/link';

const useStyles = makeStyles({
	input: {
		border: '2px solid black'
	},
	button: {
		height: '100%'
	}
});

const FIELDS = {
	Link: 'link'
};

const initialState = {
	link: '',
	errors: [FIELDS.Link],
	showErrors: false
};

export const AddLinkForm = props => {
	const [state, setState] = useState(initialState);
	const dispatch = useDispatch();
	const lastCreatedLink = useSelector(state => state.links.lastCreatedLink);
	const url = `${process.env.SITE_URL}/${lastCreatedLink.key}`;

	const validate = updates => {
		const futureState = { ...state, ...updates };
		let errors = [];

		for (const field in FIELDS) {
			if (!futureState[field.toLowerCase()]) {
				errors.push(FIELDS[field]);
			}
		}

		return errors;
	};

	const setValue = (type, value) => {
		const updates = { [type]: value };
		const errors = validate(updates);

		setState({ ...state, ...updates, ...{ errors } });
	};

	const submit = () => {
		state.errors.length
			? setState({ ...state, showErrors: true })
			: (() => {
					dispatch(createLink(state.link));
			  })();
	};

	const classes = useStyles();

	return (
		<div>
			<Grid container justify='flex-start' alignItems='stretch' xs={12}>
				<Grid item xs={4}>
					<TextField
						id='add-link-form-textfield'
						label='URL'
						variant='outlined'
						size='small'
						fullWidth
						onChange={e => setValue(FIELDS.Link, e.target.value)}
						error={
							state.showErrors &&
							state.errors.includes(FIELDS.Link)
						}
						helperText={
							state.showErrors &&
							state.errors.includes(FIELDS.Link) &&
							'Please enter a valid link.'
						}
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
							onClick={submit}
						>
							Shorten
						</Button>
					</Box>
				</Grid>
			</Grid>

			{lastCreatedLink.key && <Typography variant='p'>{url}</Typography>}
		</div>
	);
};
