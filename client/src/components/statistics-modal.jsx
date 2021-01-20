import React, { useEffect } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../store/ducks/statistics';

export const StatisticsModal = props => {
	const { link, isOpen, handleClose } = props;
	const dispatch = useDispatch();
	const statistics = useSelector(state => state.statistics.statistics);

	useEffect(() => {
		if (link.key) {
			dispatch(getStatistics(link.key));
		}
	}, [link]);

	return (
		<Dialog open={isOpen} onClose={handleClose} fullWidth>
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
