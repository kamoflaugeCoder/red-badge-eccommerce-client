import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Form, Button, Input } from 'antd';
import APIURL from '../../helpers/environment';

import { Menu } from 'antd';

type Props = {
	token: any;
	item: any;
	createReview: any;
	reviewOff: () => void;
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
		fetch(`${APIURL}/review/mine`, {
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
		fetch(`${APIURL}/review/`, {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ entry: data });
			});

		console.log('displayAll Function Called');
	}

	//  POST REVIEW

	postReview = () => {
		fetch(`${APIURL}/review/create/${this.props.createReview.id}`, {
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
				this.props.reviewOff();
				this.setState({ name: '' });
				this.setState({ title: '' });
				this.setState({ date: '' });
				this.setState({ entry: '' });
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('postReview Function Called');
	};

	// UPDATE REVIEW
	editReview(postId: any) {
		console.log(postId);
		const fetch_url = `${APIURL}/review/update/${postId}`;
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

		const fetch_url = `${APIURL}/review/delete/${postId}`;
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
				<Typography component="legend">Rating</Typography>
				<Rating
					name="simple-controlled"
					value={this.state.value}
					onChange={(event, newValue) => {
						this.setState({ value: newValue });
					}}
				/>
				<Form onFinish={this.postReview}>
					<Form.Item label="Name">
						<Input
							type="text"
							onChange={(e) => this.setState({ name: e.target.value })}
							value={this.state.name}
							name="name"
						/>
					</Form.Item>
					<Form.Item label="Title">
						<Input
							type="text"
							onChange={(e) => this.setState({ title: e.target.value })}
							value={this.state.title}
							name="title"
						/>
					</Form.Item>

					<Form.Item label="Date">
						<Input
							type="text"
							onChange={(e) => this.setState({ date: e.target.value })}
							value={this.state.date}
							name="date"
						/>
					</Form.Item>

					<Form.Item label="Entry">
						<Input
							type="text"
							onChange={(e) => this.setState({ entry: e.target.value })}
							value={this.state.entry}
							name="entry"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit Review
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
