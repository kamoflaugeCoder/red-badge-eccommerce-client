import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ItemIndex from './components/item/itemindex';
import Auth from './components/LoginComponents/Auth';
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
type stateType = {
	sessionToken: string | any;
	userRole: string | null;
};

export default class App extends Component<{}, stateType> {
	constructor(props: any) {
		super(props);
		this.state = {
			sessionToken: '',
			userRole: ''
		};
	}
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.setState({ sessionToken: localStorage.getItem('token') });
		}
		if (localStorage.getItem('userRole')) {
			this.setState({ userRole: localStorage.getItem('userRole') });
		}
	}

	updateUserRole = (newUserRole: string) => {
		localStorage.setItem('userRole', newUserRole);
		this.setState({ userRole: newUserRole });
		console.log(this.state.userRole);
	};

	updateToken = (newToken: string) => {
		localStorage.setItem('token', newToken);
		this.setState({ sessionToken: newToken });
		console.log(this.state.sessionToken);
	};

	clearToken = () => {
		localStorage.clear();
		this.setState({ sessionToken: '' });
	};

	protectedViews = () => {
		return this.state.sessionToken === localStorage.getItem('token') ? (
			<div>
				<Router>
					<Navbar1 clearToken={this.clearToken} />
				</Router>

				<ItemIndex token={this.state.sessionToken} />
			</div>
		) : (
			<Auth updateToken={this.updateToken} updateUserRole={this.updateUserRole} />
		);
	};

	render() {
		return <div> {this.protectedViews()}</div>;
	}
}
