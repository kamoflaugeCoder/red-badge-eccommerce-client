import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
import APIURL from '../../helpers/environment';

type Props = {
	item: any;
	token: any;
	getProducts: () => void;
};

type valueTypes = {
	id: number;
	reviews: [];
	category: string;
	description: string;
	image: string;
	price: string;
	title: string;
	amount: string;
};

export default class ItemEdit extends Component<Props, valueTypes> {
	constructor(props: Props) {
		super(props);
		this.state = {
			id: 0,
			reviews: [],
			category: '',
			title: '',
			description: '',
			image: '',
			price: '',
			amount: ''
		};
	}

	handleEdit = (item: any) => {
		fetch(`${APIURL}/product/edit/${this.props.item.id}`, {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			}),
			body: JSON.stringify({
				category: this.state.category,
				title: this.state.title,
				description: this.state.description,
				image: this.state.image,
				price: this.state.price,
				amount: this.state.amount
			})
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.getProducts();
			});
	};
	render() {
		return (
			<div>
				<Form onFinish={this.handleEdit}>
					<Form.Item label="Category">
						<Input
							name="category"
							value={this.state.category}
							onChange={(e) => this.setState({ category: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label="Title">
						<Input
							name="Title"
							value={this.state.title}
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label="Description">
						<Input
							name="description"
							value={this.state.description}
							onChange={(e) => this.setState({ description: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label="Image">
						<Input
							name="Image"
							value={this.state.image}
							onChange={(e) => this.setState({ image: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label="Price">
						<Input
							name="Price"
							value={this.state.price}
							onChange={(e) => this.setState({ price: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label="Amount">
						<Input
							name="amount"
							value={this.state.amount}
							onChange={(e) => this.setState({ amount: e.target.value })}
						/>
					</Form.Item>

					{/* <label>Description</label>
					<input type="text" />
					<label>Image</label>
					<input type="text" />
					<label>Price</label>
					<input type="text" />
					<label>Amount</label>
					<input type="text" /> */}
					<Button type="default" htmlType="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
