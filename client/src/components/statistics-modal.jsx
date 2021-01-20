import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';

export const StatisticsModal = props => {
	const { link, isOpen, handleClose } = props;

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogTitle>Statistics - {link.url}</DialogTitle>

			<DialogContent>Content</DialogContent>

			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};
