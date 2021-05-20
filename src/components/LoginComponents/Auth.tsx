import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import { Button } from 'antd';
import { Card } from 'antd';
import './Auth.css';

type LoginProps = {
	updateToken: (newToken: string) => void;
	updateUserRole: any;
};

type UserState = {
	showLogin: boolean;
};

export default class Auth extends Component<LoginProps, UserState> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			showLogin: false
		};
	}
	loginToggle = (event: any) => {
		event.preventDefault();
		if (this.state.showLogin === false) {
			return this.setState({
				showLogin: true
			});
		}
		if (this.state.showLogin === true) {
			return this.setState({
				showLogin: false
			});
		}
	};
	render() {
		return (
			<div className="auth">
				<Card style={{ width: 300 }}>
					{this.state.showLogin ? (
						<div>
							<Register updateToken={this.props.updateToken} updateUserRole={this.props.updateUserRole} />
						</div>
					) : (
						<div>
							<Login updateToken={this.props.updateToken} updateUserRole={this.props.updateUserRole} />
						</div>
					)}
					<Button
						type="default"
						onClick={(e) => {
							this.loginToggle(e);
						}}
					>
						{this.state.showLogin ? 'Login' : 'Register'}
					</Button>
				</Card>
				<br />
			</div>
		);
	}
}
