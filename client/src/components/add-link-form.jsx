import { Button, TextField } from '@material-ui/core';
import React from 'react';

export const AddLinkForm = props => {
	return (
		<form noValidate autoComplete='off'>
			<TextField
				id='add-link-form-textbox'
				label='URL'
				variant='outlined'
			/>
			<Button color='primary' variant='contained'>
				Submit
			</Button>
		</form>
	);
};
