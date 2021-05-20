import React, { Component } from 'react';

import Cart from '../cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Wrapper, StyledButton } from '../../App.styles';
import Item from './Item';
import ProductInput from '../products/productInput';
import { Row, Col, Button } from 'antd';

export type CartItemType = {
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
	amount: number;
	reviews: [];
};

type acceptedProps = {
	token: string;
};

type valueTypes = {
	cartItems: CartItemType[];
	cartOpen: boolean;
	createReview: {};
	createActive: boolean;
};

export default class ItemIndex extends Component<acceptedProps, valueTypes> {
	constructor(props: acceptedProps) {
		super(props);
		this.state = {
			cartItems: [],
			cartOpen: false,
			createReview: {},
			createActive: false
		};
	}

	createOn = () => {
		this.setState({ createActive: true });
	};

	createOff = () => {
		this.setState({ createActive: false });
	};

	handleAddToCart = (item: CartItemType) => null;
	handleRemoveFromCart = (id: number) => null;

	postReview = (review: any) => {
		this.setState({ createReview: review });
	};

	getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

	getProducts = () => {
		fetch('http://localhost:5200/product', {
			method: 'GET',
			headers: {
				Authorization: this.props.token
			}
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ cartItems: data });
			});
	};

	componentDidMount() {
		this.getProducts();
	}

	render() {
		return (
			<Wrapper>
				<Drawer anchor="right" open={this.state.cartOpen} onClose={() => this.setState({ cartOpen: false })}>
					<Cart
						cartItems={this.state.cartItems}
						addToCart={this.handleAddToCart}
						removeFromCart={this.handleRemoveFromCart}
					/>
				</Drawer>
				<StyledButton onClick={() => this.setState({ cartOpen: true })}>
					<Badge badgeContent={this.getTotalItems(this.state.cartItems)} color="error">
						<AddShoppingCartIcon />
					</Badge>
				</StyledButton>
				<Row justify="center">
					<Col span={12}>
						<Button
							type="default"
							onClick={() => {
								this.createOn();
								<ProductInput
									token={this.props.token}
									getProducts={this.getProducts}
									createOn={this.createOn}
									createOff={this.createOff}
								/>;
							}}
						>
							Add Product
						</Button>
					</Col>
				</Row>
				<Grid container spacing={3}>
					{this.state.cartItems.map((item: any) => (
						<Grid item key={item.id} xs={12} sm={4}>
							<Item
								postReview={this.postReview}
								createReview={this.state.createReview}
								item={item}
								handleAddToCart={this.handleAddToCart}
								token={this.props.token}
								getProducts={this.getProducts}
							/>
						</Grid>
					))}
				</Grid>
			</Wrapper>
		);
	}
}
