import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Container } from 'reactstrap';

type Props = {
	item: any;
	token: any;
};

export default class ReviewView extends Component<Props, {}> {
	constructor(props: Props) {
		super(props);
		this.state = {
			name: '',
			title: '',
			date: 0,
			entry: '',
			isModalVisible: false
		};
	}

	handleDelete = (item: any) => {
		fetch(`http://localhost:5200/reviews/${this.props.item.id}`, {
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {});
	};

	// const Item: React.FC<Props> = ({ item, handleAddToCart, token, getProducts, postReview, createReview }) => {
	handleEdit = () => {
		fetch(`http://localhost:5200/review/edit/`, {
			method: 'UPDATE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				// getProducts()
			});
	};

	showModal = () => {
		this.setState({ isModalVisible: true });
	};

	handleOk = () => {
		this.setState({ isModalVisible: false });
	};

	handleCancel = () => {
		this.setState({ isModalVisible: false });
	};

	render() {
		return (
			<div>
				{this.props.item.reviews.map((review: any) => (
					<Container>
						<div style={{ overflow: 'hidden', padding: '0px' }}>
							<p style={{ float: 'left' }}>Name:</p>
							{/* <input type="text"  onChange={(e) => setName(e.target.value)} value={name} name="name"/> */}
							<p style={{ float: 'left', marginLeft: '5px' }}> {review.name}</p>

							<p style={{ float: 'left' }}>Title: </p>
							{/* <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title" /> */}
							<p style={{ float: 'left', marginLeft: '5px' }}> {review.title}</p>

							<p style={{ float: 'left' }}>Date: </p>
							{/* <input type="text" onChange={(e) => setDate(e.target.value)} value={date} name="date" /> */}
							<p style={{ float: 'left', marginLeft: '0px' }}> {review.date}</p>

							<p style={{ float: 'left' }}>Entry: </p>
							{/* <input type="text" onChange={(e) => setEntry(e.target.value)} value={entry} name="entry" /> */}
							<p style={{ float: 'left', marginLeft: '0px' }}> {review.entry}</p>
						</div>
						{/* // <form onSubmit={postReview}>
					// 	<Button onClick={showModal}>Open Modal</Button>

					// 	<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
					// 	<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title"/>
					// 		<p>Some contents...</p>
					// 		<p>Some contents...</p>
					// 	</Modal>
					// 	</form>
                     */}
					</Container>
				))}
			</div>
		);
	}
}
