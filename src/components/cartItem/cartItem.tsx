import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//types
import { CartItemType } from '../item/Item';
//styles
import { Wrapper } from './cartItem.styles';
import { render } from '@testing-library/react';

type Props = {
	item: CartItemType;
	addToCart: (clickedItem: CartItemType) => void;
	removeFromCart: (id: number) => void;
};

export default class CartItem extends Component<Props, {}> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<Wrapper>
				<div>
					<h3>{this.props.item.title}</h3>
					<div className="information">
						<p>Price: ${this.props.item.price}</p>
						<p>Total: ${(this.props.item.amount * this.props.item.price).toFixed(2)}</p>
					</div>
					<div className="buttons">
						<Button
							size="small"
							disableElevation
							variant="contained"
							onClick={() => this.props.removeFromCart(this.props.item.id)}
						>
							-
						</Button>
						<p>{this.props.item.amount}</p>
						<Button
							size="small"
							disableElevation
							variant="contained"
							onClick={() => this.props.addToCart(this.props.item)}
						>
							+
						</Button>
					</div>
				</div>
				<img src={this.props.item.image} alt={this.props.item.title} />
			</Wrapper>
		);
	}
}
