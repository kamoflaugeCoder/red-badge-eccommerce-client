import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

//state type

// const initialState:State = {
//   username: '',
//   password: '',
//   isButtonDisabled: true,
//   helperText: '',
//   isError: false
// };

// type Action = { type: 'setUsername', payload: string }
//   | { type: 'setPassword', payload: string }
//   | { type: 'setIsButtonDisabled', payload: boolean }
//   | { type: 'loginSuccess', payload: string }
//   | { type: 'loginFailed', payload: string }
//   | { type: 'setIsError', payload: boolean }
//   | { type: 'registerSuccess', payload: string }
//   | { type: 'registerFailed', payload: string }

// //   | { type: 'setLogin', payload: string };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'setUsername':
//       return {
//         ...state,
//         username: action.payload
//       };
//     case 'setPassword':
//       return {
//         ...state,
//         password: action.payload
//       };
//     case 'setIsButtonDisabled':
//       return {
//         ...state,
//         isButtonDisabled: action.payload
//       };
//     case 'loginSuccess':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false
//       };
//     case 'loginFailed':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true
//       };
//     case 'setIsError':
//       return {
//         ...state,
//         isError: action.payload
//       };
//       case 'registerSuccess':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true
//       };
//       case 'registerFailed':
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true
//       };
//   }

type State = {
	email: string;
	password: string;
};

interface LoginProps {
	updateToken: (newToken: string) => void;
	updateUserRole: any;
	// setSessionToken: (newToken: string) => void;
}

export default class Login extends Component<LoginProps, State> {
	constructor(props: LoginProps) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	// const [state, dispatch] = useReducer(reducer, initialState);
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [Login, setLogin] = useState('');

	// LOGIN FETCH RIGHT HERE==============================
	handleSubmit = () => {
		// e.preventDefault();
		fetch(`http://localhost:5200/user/login`, {
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
				<h3 style={{ textAlign: 'center' }}>Login</h3>
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
						Log in
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
