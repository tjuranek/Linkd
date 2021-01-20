import {
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText
} from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLinksByAccount } from '../store/ducks/link';
import DeleteIcon from '@material-ui/icons/Delete';

export const LinkList = () => {
	const dispatch = useDispatch();
	const links = useSelector(state => state.links.links);

	useEffect(() => {
		dispatch(getLinksByAccount());
	}, []);

	return (
		<List>
			{links.map(link => (
				<ListItem>
					<ListItemAvatar>
						<ShowChartIcon />
					</ListItemAvatar>
					<ListItemText>
						{link.url} - {link.key}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton edge='end'>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
};
