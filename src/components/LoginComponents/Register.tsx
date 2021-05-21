import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import APIURL from '../../helpers/environment';

// const useStyles = withStyles((theme: Theme) =>
// 	createStyles({
// 		container: {
// 			display: 'flex',
// 			flexWrap: 'wrap',
// 			width: 400,
// 			margin: `${theme.spacing(0)} auto`
// 		},
// 		loginBtn: {
// 			marginTop: theme.spacing(2),
// 			flexGrow: 1
// 		},
// 		registerBtn: {
// 			marginTop: theme.spacing(2),
// 			flexGrow: 1
// 		},
// 		header: {
// 			textAlign: 'center',
// 			background: '#212121',
// 			color: '#fff'
// 		},
// 		card: {
// 			marginTop: theme.spacing(10)
// 		}
// 	})
// );
// const classes = useStyles;
//state type

type State = {
	email: string;
	password: string;
};

interface RegisterProps {
	updateToken: (newToken: string) => void;
	updateUserRole: any;
	// setSessionToken:React.Dispatch<React.SetStateAction<string>>
}

export default class Register extends Component<RegisterProps, State> {
	classes: any;
	constructor(props: RegisterProps) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	// REGISTER FETCH RIGHT HERE==============================
	handleSubmit = () => {
		// e.preventDefault();
		fetch(`${APIURL}/user/create`, {
			method: 'POST',
			body: JSON.stringify({ user: { email: this.state.email, password: this.state.password } }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.updateToken(data.sessionToken);
				this.props.updateUserRole(data.user.userRole);
				console.log(data);
			});
	};

	render() {
		return (
			<Form onFinish={this.handleSubmit}>
				<h3 style={{ textAlign: 'center' }}>Register</h3>
				<Form.Item label="Email">
					<Input
						type="text"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={(e) => this.setState({ email: e.target.value })}
					/>
				</Form.Item>
				<Form.Item label="Password">
					<Input
						type="password"
						placeholder="Password"
						value={this.state.password}
						name="password"
						onChange={(e) => this.setState({ password: e.target.value })}
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
