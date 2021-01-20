import {
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText
} from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLink, getLinksByAccount } from '../store/ducks/link';
import DeleteIcon from '@material-ui/icons/Delete';
import { StatisticsModal } from './statistics-modal';

const initialState = {
	isModalOpen: false,
	selectedLink: {}
};

export const LinkList = () => {
	const [state, setState] = useState(initialState);

	const handleOpenModal = link => {
		setState({ ...state, isModalOpen: true, selectedLink: link });
	};

	const handleCloseModal = () => {
		setState({ ...state, isModalOpen: false, selectedLink: {} });
	};
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
		<div>
			<List>
				{links.map(link => (
					<ListItem>
						<ListItemAvatar>
							<ShowChartIcon
								onClick={() => handleOpenModal(link)}
							/>
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

			<StatisticsModal
				link={state.selectedLink}
				isOpen={state.isModalOpen}
				handleClose={handleCloseModal}
			/>
		</div>
	);
};
