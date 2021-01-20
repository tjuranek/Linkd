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
import { deleteLink, getLinksByAccount } from '../store/ducks/link';
import DeleteIcon from '@material-ui/icons/Delete';

export const LinkList = () => {
	const dispatch = useDispatch();
	const links = useSelector(state => state.links.links);

	useEffect(() => {
		dispatch(getLinksByAccount());
	}, []);

	const handleDelete = link => {
		dispatch(deleteLink(link._id));
	};

	if (!links.length) {
		return <p>You haven't created any links yet!</p>;
	}

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
						<IconButton
							edge='end'
							onClick={() => handleDelete(link)}
						>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
};
