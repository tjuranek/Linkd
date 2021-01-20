import React, { useEffect, useState } from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistics } from '../store/ducks/statistics';
import Chart from 'react-apexcharts';
import { getPreviousWeekDates } from '../infrastructure/date-service';

export const StatisticsModal = props => {
	const { link, isOpen, handleClose } = props;
	const [state, setState] = useState({
		options: {},
		series: {}
	});
	const dispatch = useDispatch();
	const statistics = useSelector(state => state.statistics.statistics);

	const getColumnNames = dates => {
		let columnNames = [];

		for (const date of dates) {
			columnNames.push(`${date.getMonth() + 1}/${date.getDate()}`);
		}

		return columnNames;
	};

	const getGroupedData = dates => {
		let data = [];

		for (const date of dates) {
			const group = statistics.filter(
				statistic =>
					date.setHours(0, 0, 0, 0) ===
					new Date(statistic.dateCreated).setHours(0, 0, 0, 0)
			);

			data.push(group.length);
		}

		return data;
	};

	useEffect(() => {
		if (link.key) {
			dispatch(getStatistics(link.key));
		}
	}, [link]);

	useEffect(() => {
		if (statistics.length) {
			const dates = getPreviousWeekDates();
			const categories = getColumnNames(dates);
			const data = getGroupedData(dates);

			setState({
				options: {
					chart: {
						id: 'basic-bar'
					},
					xaxis: {
						categories: categories
					}
				},
				series: [
					{
						name: 'series-1',
						data: data
					}
				]
			});
		}
	}, [statistics]);

	return (
		<Dialog open={isOpen} onClose={handleClose} fullWidth>
			<DialogTitle>Statistics - {link.url}</DialogTitle>

			<DialogContent>
				{statistics.length ? (
					<Chart
						options={state.options}
						series={state.series}
						type='bar'
					/>
				) : (
					<p>There aren't any statistics!</p>
				)}
			</DialogContent>

			<DialogActions>
				<Button onClick={handleClose} color='primary'>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};
