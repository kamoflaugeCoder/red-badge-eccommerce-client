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
import APIURL from "../../helpers/environment"

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
	createReview: any;
	createActive: boolean;
  reviewActive: boolean
};

export default class ItemIndex extends Component<acceptedProps, valueTypes> {
	constructor(props: acceptedProps) {
		super(props);
		this.state = {
			cartItems: [],
			cartOpen: false,
			createReview: {},
			createActive: false,
      reviewActive: false
		};
	}

	createOn = () => {
		this.setState({ createActive: true });
	};

	createOff = () => {
		this.setState({ createActive: false });
	};

  reviewOn = () => {
    this.setState({reviewActive: true})
  }

  reviewOff = () => {
    this.setState({reviewActive: false})
  }

	handleAddToCart = (item: CartItemType) => null;
	handleRemoveFromCart = (id: number) => null;

	postReview = (review: any) => {
		this.setState({ createReview: review });
	};

	getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, items) => ack + items.amount, 0);

	getProducts = () => {
		fetch(`${APIURL}/product`, {
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
			// <Wrapper>
      <div>
				{/* <Drawer anchor="right" open={this.state.cartOpen} onClose={() => this.setState({ cartOpen: false })}>
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
				</StyledButton> */}
				<Row justify="center">
					<Col span={12}>
						<Button
							type="default"
							onClick={() => {
								this.createOn();
								
							}}
						>
							Add Product
						</Button>
					</Col>
				</Row>
				{/* <Grid container spacing={3}> */}
        <Row justify="space-around">
					{this.state.cartItems.map((item: any) => (
						// <Grid item key={item.id} xs={12} sm={4}>
            <Col span={6} style={{padding: "20px"}} key={item.id}>
							<Item
								postReview={this.postReview}
								createReview={this.state.createReview}
								item={item}
								handleAddToCart={this.handleAddToCart}
								token={this.props.token}
								getProducts={this.getProducts}
                reviewOn={this.reviewOn}
                reviewOff={this.reviewOff}
							/>
              </Col>
						// </Grid>
					))}
          </Row>
				{/* </Grid> */}
      {this.state.createActive ? (
        <ProductInput
        token={this.props.token}
        getProducts={this.getProducts}
        createOn={this.createOn}
        createOff={this.createOff}
      />
      ) : (
        <></>
      )}
			{/* </Wrapper> */}
      </div>
		);
	}
}
