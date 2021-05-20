import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

// Types
// styles
import { Wrapper } from './Items.styles';
// import LoginForm from '../LoginComponents/loginForm'
import React, { Component } from 'react';
import ReviewView from '../products/reviewView';

import ProductReview from '../products/productReviews';

import { Collapse } from 'antd';
import ItemEdit from './ItemEdit';

const { Panel } = Collapse;

//Types
export type CartItemType = {
	id: number;
	reviews: [];
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
};
type Props = {
	item: CartItemType;
	handleAddToCart: (clickedItem: CartItemType) => void;
	token: string;
	getProducts: () => void;
	postReview: any;
	createReview: any;
};

// EDIT FETCH
export default class Item extends Component<Props, CartItemType> {
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

	handleDelete(item: {}) {
		fetch(`http://localhost:5200/product/${this.props.item.id}`, {
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.getProducts();
			});
	}

	reviewMenu() {
		<button>View Reviews ${this.props.item.reviews.length}</button>;
	}
	editProductMenu() {
		<Button>Edit</Button>;
	}

	render() {
		return (
			<Wrapper>
				<img src={this.props.item.image} alt={this.props.item.title} />
				<div>
					<h3>{this.props.item.title}</h3>
					<p>{this.props.item.description}</p>
					<h3>${this.props.item.price}</h3>
				</div>
				<div>
					<Collapse ghost>
						<Panel
							header=""
							showArrow={false}
							key="1"
							extra={
								<button
									onClick={() => {
										this.props.postReview(this.props.item);
									}}
								>
									Reviews
								</button>
							}
						>
							<ProductReview
								token={this.props.token}
								item={this.props.item}
								createReview={this.props.createReview}
							/>;
						</Panel>
					</Collapse>
				</div>
				<div>
					<Collapse ghost>
						<Panel header={this.reviewMenu} showArrow={false} key="1">
							<ReviewView token={this.props.token} item={this.props.item} />
						</Panel>
					</Collapse>
				</div>

				<div>
					{/* <Button onClick={() => <ItemEdit />}>Edit</Button> */}
					<div>
						<Collapse ghost>
							<Panel header={this.editProductMenu} showArrow={false} key="1">
								<ItemEdit token={this.props.token} item={this.props.item} />
							</Panel>
						</Collapse>
					</div>

					<Button type="button" onClick={() => this.props.handleAddToCart(this.props.item)}>
						Add to cart
					</Button>
					<Button onClick={() => this.handleDelete(this.props.item)}>Delete</Button>
				</div>
			</Wrapper>
		);
	}
}
