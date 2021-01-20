import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLinksByAccount } from '../store/ducks/link';

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
					<ListItemText>
						{link.url} - {link.key}
					</ListItemText>
				</ListItem>
			))}
		</List>
	);
};
