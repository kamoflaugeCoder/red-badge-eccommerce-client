import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import SiteBar from './Sitebar';
import { Button, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { PinDropSharp } from '@material-ui/icons';

// import{
//     Navbar,
//     NavbarBrand,
//     Collapse,
//     NavbarToggler,
//     Nav,
//     NavItem,
//     Button
// } from 'reactstrap';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		},
		menuButton: {
			marginRight: theme.spacing(2)
		},
		title: {
			flexGrow: 1
		}
	})
);

const Navbar1 = (props: any) => {
	const classes = useStyles();
	const [
		anchorEl,
		setAnchorEl
	] = React.useState<null | HTMLElement>(null);
	const isopen = Boolean(anchorEl);
	const [
		isOpen,
		setIsOpen
	] = useState(false);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const toggle = () => {
		let newIsOpen = !isOpen;
		setIsOpen(newIsOpen);
	};

	const adminButton = () => {
		if (localStorage.getItem('userRole') === 'Admin') {
			return <button>Admin</button>;
		}
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						NuTECH
					</Typography>
					<Button color="inherit" onClick={props.clearToken}>
						Logout
					</Button>
					{adminButton()}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar1;
