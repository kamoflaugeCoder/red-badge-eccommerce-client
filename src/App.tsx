import ItemIndex from './components/item/itemindex';
import Auth from './components/LoginComponents/Auth';
import { useState } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Item from './components/item/Item';
import Header from './components/navbar/Navbar'
import Button from '@material-ui/core/Button';
import Navbar from './components/navbar/Navbar';

function App(props: any) {
	// TOKEN NEED TO BE UPDATED=============================
	const [ sessionToken, setSessionToken ] = useState('');

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
	// =================================/

	// const protectedViews = () => {
	// 	return sessionToken === localStorage.getItem('token') ? (
	// 		<ItemIndex token={sessionToken} />
	// 	) : (
	// 		<Auth token={updateToken} />
	// 	);
	// };
	const protectedViews = () => {
	  return sessionToken === localStorage.getItem("token") || true ? (
	    <BrowserRouter>
	      <Switch>
	        <Route exact path="/">
	        <Drawer />
			
	        </Route>
	        {/* <Button variant="contained">Get Started</Button> */}
			{/* <Navbar /> */}
	        <Route exact path="/Drawer">
	            <Auth updateToken={updateToken} />
	        </Route>

	        <Route exact path="/item/item">
	          {/* <Item token={sessionToken} /> !!  NEEDS TO HAVE COMPONENT IMPORTED AS 'ITEM' */}
	        </Route>
				
			<Route exact path="/items">
			<ItemIndex token={sessionToken} />
	        </Route>

	      </Switch>
	    </BrowserRouter>
	  ) : (
	    <Drawer />
	  );
	}
	

	return <div> {protectedViews()}</div>;
}

export default App;
