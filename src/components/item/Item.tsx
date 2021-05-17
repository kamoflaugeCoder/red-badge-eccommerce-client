
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import { Collapse } from 'reactstrap';
// Types

// styles
import { Wrapper } from './Items.styles';
// import LoginForm from '../LoginComponents/loginForm'

import React from 'react';

// import './index.css';
import ProductReview from '../products/productReviews';

import { Collapse } from 'antd';
import { Input } from 'antd';
import { Rate } from 'antd';

const { Panel }   = Collapse;


function callback(key: any) {
	console.log(key);
  }
  
  const text = `
  `;


//Types
export type CartItemType = {
	id: number;
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

const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79'
};


// EDIT FETCH
const Item: React.FC<Props> = ({ item, handleAddToCart, token, getProducts, postReview, createReview }) => {

	const handleEdit = (item: any) => {
		fetch(`http://localhost:5200/product/edit`, {
			/*${apiURL}*/
			method: 'UPDATE',

			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				// getProducts()
			});
	};

	const handleDelete = (item: any) => {
		fetch(`http://localhost:5200/product/${item.id}`, {
			/*${apiURL}*/
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				getProducts();
			});
	};

	const menu = <ProductReview token={token} item={item} createReview={createReview} />;

	/* ProductReview TEXTFIELD and BUTTON */

	return (
		<Wrapper>
			<img src={item.image} alt={item.title} />
			<div>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3>${item.price}</h3>
			</div>
			{/* ProductReview Dropdown Link */}
			{/* <Dropdown overlay={menu}>
				<a
					className="ant-dropdown-link"
					onClick={() => {
						postReview(item);
					}}
				>
					Give review here<DownOutlined />
				</a>
			</Dropdown>, */}
<div>
<Collapse ghost>
    <Panel header="" showArrow={false} key="1" extra={
	<button onClick={() => {
		postReview(item);
	}}>Reviews</button>
}>
	<ProductReview token={token} item={item} createReview={createReview} />;
    </Panel>
  </Collapse>,
  </div>


  			<div>
			<Button type="button" onClick={() => handleAddToCart(item)}>
				Add to cart
			</Button>
			<Button onClick={() => handleDelete(item)}>Delete</Button>
			</div>
		</Wrapper>
	);
};

export default Item;
