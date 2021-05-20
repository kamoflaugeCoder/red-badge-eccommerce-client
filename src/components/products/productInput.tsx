import React, { Component } from 'react';
import { Form, Input, Button, Modal } from 'antd';

type state = {
	category: string;
	title: string;
	description: string;
	image: string;
	price: number | any;
	amount: number | any;
	isModalVisible: boolean;
};

type Props = {
	token: string;
	getProducts: () => void;
	createOn: () => void;
	createOff: () => void;
};

// interface ProductInputProps{
//   updateToken: (newToken: string) => null;
// };
export default class ProductInput extends Component<Props, state> {
	constructor(props: Props) {
		super(props);
		this.state = {
			category: '',
			title: '',
			description: '',
			image: '',
			price: 0,
			amount: 0,
			isModalVisible: true
		};
	}

	handleOk = () => {
		this.setState({ isModalVisible: false });
	};

	handleCancel = () => {
		this.setState({ isModalVisible: false });
	};

	handleSubmit = () => {
		// e.preventDefault();

		fetch(`http://localhost:5200/product/create`, {
			/*${apiURL}*/
			method: 'POST',
			body: JSON.stringify({
				product: {
					category: this.state.category,
					title: this.state.title,
					description: this.state.description,
					image: this.state.image,
					price: this.state.price,
					amount: this.state.amount
				}
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.props.createOff();
				this.props.getProducts();

				this.setState({ category: '' });

				this.setState({ title: '' });

				this.setState({ description: '' });

				this.setState({ image: '' });

				this.setState({ price: 0 });

				this.setState({ amount: 0 });
				// props.updateToken(data.sessionToken); /* Probably not right functionality */
			});
	};

	render() {
		return (
			<Modal title="Basic Modal" visible={true} onOk={this.handleOk} onCancel={this.handleCancel}>
				<Form onFinish={this.handleSubmit}>
					<Form.Item>
						<Input
							type="text"
							name="category"
							placeholder="category"
							value={this.state.category}
							onChange={(e) => this.setState({ category: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="title"
							value={this.state.title}
							name="title"
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="description"
							value={this.state.description}
							name="description"
							onChange={(e) => this.setState({ description: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="image"
							value={this.state.image}
							name="image"
							onChange={(e) => this.setState({ image: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="price"
							value={this.state.price}
							name="price"
							onChange={(e) => this.setState({ price: e.target.value })}
						/>
					</Form.Item>
					<Form.Item>
						<Input
							type="text"
							placeholder="amount"
							value={this.state.amount}
							name="amount"
							onChange={(e) => this.setState({ amount: e.target.value })}
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Add Product
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		);
	}
}
