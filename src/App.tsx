import { useState } from 'react';
// import {BrowserRouter, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Item from './components/item/Item';
// import Navbar from './navbar/Navbar'
import Button from '@material-ui/core/Button';
// import Navbar from './navbar/Navbar';
import Cart from './components/cart/Cart';
import Navbar from './home/navbar/Navbar';

import ItemIndex from './components/item/itemindex';
import Auth from './components/LoginComponents/Auth';
import ProductInput from './components/products/productInput'
import Products from './components/products/Products'

export type CartItemType = {
    id: number;
    category:string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
  }

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


function App(props: any) {
	// TOKEN NEED TO BE UPDATED=============================
	const [  sessionToken, setSessionToken ] = useState('');

	// ----------------I THINK I NEED THIS!!!!!!!!!!!!!
	// useEffect(() => {
	//   if (props.localStorage.item("token")) {
	//     setSessionToken(props.localStorage.item("token"));
	//   }
	// }, []);

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
	return sessionToken === localStorage.getItem("token")? (
<Router>
<div>
<ProductInput token={sessionToken}/>
</div>
<div>
<ItemIndex token ={sessionToken}/>
</div> 
<div>
	<Products token={sessionToken}/>
</div>      
</Router>
		  
	) : (
		<Auth updateToken={updateToken} />
	)
}
	
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
