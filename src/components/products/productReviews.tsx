import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from 'reactstrap';
import { Menu } from 'antd';

type Props = {
	token: any;
	item: any;
	createReview: any;
};

type state = {
	value: number | null;
	name: string;
	title: string;
	date: string;
	entry: string;
};

export default class ProductReview extends Component<Props, state> {
	constructor(props: Props) {
		super(props);
		this.state = {
			value: 0,
			name: '',
			title: '',
			date: '',
			entry: ''
		};
	}

	/**DISPLAY BY USER */
	displayMine = () => {
		const accessToken = localStorage.getItem('SessionToken');
		fetch('http://localhost:5200/review/mine', {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then(function(response) {
				return response.json();
			})
			.catch(function(error) {
				console.error('Error', error);
			})
			.then(function(response) {
				console.log(response);
			});

		console.log('displayMineFunction Called');
	};

	/* DISPLAY ALL */

	display() {
		fetch('http://localhost:5200/review/', {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(function(response) {
				return response.json();
			})
			.catch(function(error) {
				console.error('Error', error);
			})
			.then(function(response) {
				console.log(response);
			});

		console.log('displayAll Function Called');
	}

	//  POST REVIEW

	postReview(e: any) {
		e.preventDefault();
		fetch(`http://localhost:5200/review/create/${this.props.createReview.id}`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			}),
			body: JSON.stringify({
				name: this.state.name,
				title: this.state.title,
				date: this.state.date,
				entry: this.state.entry
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.setState({ name: '' });
				this.setState({ title: '' });
				this.setState({ date: '' });
				this.setState({ entry: '' });
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('postReview Function Called');
	}

	// UPDATE REVIEW
	editReview(postId: any) {
		console.log(postId);
		const fetch_url = `http://localhost:5200/review/update/${postId}`;
		const accessToken = localStorage.getItem('SessionToken');
		const response = fetch(fetch_url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: this.props.token
			},
			body: JSON.stringify({
				name: this.state.name,
				title: this.state.title,
				date: this.state.date,
				entry: this.state.entry
			})
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
			});
	}

	// DELETE REVIEW
	deleteReview(postId: any) {
		console.log('deleteReview working');
		console.log(postId);

		const fetch_url = 'http://localhost:5200/review/delete/${postId}';
		const accessToken = localStorage.getItem('SessionToken');

		fetch(fetch_url, {
			method: 'DELETE',
			headers: {
				// 'Content-Type': 'application/json',
				// 'Authorization': accessToken
			}
		}).then((response) => {
			console.log(response);
			this.displayMine();
		});
	}
	render() {
		return (
			<div>
				<Box component="fieldset" mb={3} borderColor="transparent">
					<Typography component="legend">Rating</Typography>
					<Rating
						name="simple-controlled"
						value={this.state.value}
						onChange={(event, newValue) => {
							this.setState({ value: newValue });
						}}
					/>
					<Menu>
						<form onSubmit={this.postReview}>
							<label>Name</label>
							<input
								type="text"
								onChange={(e) => this.setState({ name: e.target.value })}
								value={this.state.name}
								name="name"
							/>

							<label>Title</label>
							<input
								type="text"
								onChange={(e) => this.setState({ title: e.target.value })}
								value={this.state.title}
								name="title"
							/>

							<label>Date</label>
							<input
								type="text"
								onChange={(e) => this.setState({ date: e.target.value })}
								value={this.state.date}
								name="date"
							/>

							<label>Entry</label>
							<input
								type="text"
								onChange={(e) => this.setState({ entry: e.target.value })}
								value={this.state.entry}
								name="entry"
							/>

							<button type="submit">Submit Review</button>

							<Button onClick={() => this.editReview(this.props.item)}>Edit</Button>
						</form>
					</Menu>
				</Box>
			</div>
		);
	}
}

{
	/* <div>
					<Button onClick={showModal}>
						Open Modal
					</Button>


					<Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</Modal>
                    </div> */
}
