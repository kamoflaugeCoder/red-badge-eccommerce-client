import React, { Component } from 'react';
import CartItem from '../cartItem/cartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../item/Item';

type Props = {
	cartItems: CartItemType[];
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export default class Cart extends Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}

	calculateTotal = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

	render() {
		return (
			<Wrapper>
				<h2>Your Shopping Cart</h2>
				{this.props.cartItems.length === 0 ? <p>No items in cart.</p> : null}
				{this.props.cartItems.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						addToCart={this.props.addToCart}
						removeFromCart={this.props.removeFromCart}
					/>
				))}
				<h2>Total: ${this.calculateTotal(this.props.cartItems).toFixed(2)}</h2>
			</Wrapper>
		);
	}
}
