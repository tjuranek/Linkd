import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { AccountButtons } from './account-buttons';
import { Logo } from './logo';

export const Navbar = props => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Logo />
				<AccountButtons />
			</Toolbar>
		</AppBar>
	);
};
