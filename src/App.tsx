import { useState, useEffect } from 'react';
// import {BrowserRouter, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Item from './components/item/Item';
// import Navbar from './navbar/Navbar'
import Button from '@material-ui/core/Button';
// import Navbar from './navbar/Navbar';
import Cart from './components/cart/Cart';

import ItemIndex from './components/item/itemindex';
import Auth from './components/LoginComponents/Auth';
import ProductInput from './components/products/productInput';
import Products from './components/products/Products';
import ProductReviews from './components/products/productReviews';
import Sitebar from './navbar/Navbar1';
import Navbar1 from './navbar/Navbar1';

export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};

type Props = {
	item: CartItemType;
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

function App() {
	// TOKEN NEED TO BE UPDATED=============================
	const [
		sessionToken,
		setSessionToken
	] = useState('');
	const [
		userRole,
		setUserRole
	] = useState('');

	// ----------------I THINK I NEED THIS!!!!!!!!!!!!!
	useEffect(() => {
		if (localStorage.getItem('token')) {
			setSessionToken(localStorage.getItem('token')!);
		}
	}, []);

	useEffect(() => {
		if (localStorage.getItem('userRole')) {
			setUserRole(localStorage.getItem('userRole')!);
		}
	});

	const updateUserRole = (newUserRole: string) => {
		localStorage.setItem('userRole', newUserRole);
		setUserRole(newUserRole);
		console.log(userRole);
	};

	const updateToken = (newToken: string) => {
		localStorage.setItem('token', newToken);
		setSessionToken(newToken);
		console.log(sessionToken);
	};

	const clearToken = () => {
		localStorage.clear();
		setSessionToken('');
	};

	const protectedViews = () => {
		return sessionToken === localStorage.getItem('token') ? (
			<div>
				<Router>
					<Navbar1
					
						// token={sessionToken}
						clearToken={clearToken}
					/>
				{/* <ProductInput/> */}
				</Router>
				<ProductInput token={sessionToken} />
				<ItemIndex token={sessionToken} />
				{/* <Products token={sessionToken} /> */}
				
			</div>
		) : (
			<Auth updateToken={updateToken} updateUserRole={updateUserRole} />
		);
	};

	return <div> {protectedViews()}</div>;
	//   return (
	//     <div className={classes.root}>
	//       <AppBar position="static">
	//         <Toolbar>
	//           <Typography variant="h6" className={classes.title}>
	//            NuTech
	//           </Typography>
	//             <div>
	//               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
	//             <MenuIcon />
	//           </IconButton>
	//               <Menu
	//                 id="menu-appbar"
	//                 anchorEl={anchorEl}
	//                 anchorOrigin={{
	//                   vertical: 'top',
	//                   horizontal: 'right',
	//                 }}
	//                 keepMounted
	//                 transformOrigin={{
	//                   vertical: 'top',
	//                   horizontal: 'right',
	//                 }}
	//                 open={open}
	//                 onClose={handleClose}
	//               >
	//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
	//                 <MenuItem onClick={handleClose}>My account</MenuItem>
	//                 <MenuItem onClick={handleClose}>Orders</MenuItem>
	//               </Menu>
	//             </div>
	//         </Toolbar>
	//       </AppBar>
	//     </div>
	//   );
}

export default App;
