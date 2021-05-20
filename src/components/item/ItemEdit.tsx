import React, { Component } from 'react';

type Props = {
	item: any;
	token: any;
};

type valueTypes = {
	id: number;
	reviews: [];
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
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
			price: 0,
			amount: 0
		};
	}

	handleEdit = (item: any) => {
		fetch(`http://localhost:5200/product/edit/${this.props.item.id}`, {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			}),
			body: JSON.stringify({
				product: {
					category: this.state.category,
					title: this.state.title,
					description: this.state.description,
					image: this.state.image,
					price: this.state.price,
					amount: this.state.amount
				}
			})
		})
			.then((response) => response.json())
			.then((data) => {
				// getProducts()
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleEdit}>
					<label>Name</label>
					<input type="text" />
					<label>Category</label>
					<input type="text" />
					<label>Description</label>
					<input type="text" />
					<label>Image</label>
					<input type="text" />
					<label>Price</label>
					<input type="text" />
					<label>Amount</label>
					<input type="text" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
