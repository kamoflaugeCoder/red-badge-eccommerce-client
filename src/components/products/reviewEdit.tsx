import React, { Component } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import APIURL from '../../helpers/environment';

type state = {
	name: string;
	title: string;
	date: string;
	entry: string;
	isModalVisible: boolean;
};

type Props = {
	item: any;
	token: any;
	getProducts: any;
	updateOff: () => void;
	editReview: any;
};

export default class ReviewEdit extends Component<Props, state> {
	constructor(props: Props) {
		super(props);

		this.state = {
			name: this.props.editReview.name,
			title: this.props.editReview.title,
			date: this.props.editReview.date,
			entry: this.props.editReview.entry,
			isModalVisible: true
		};
	}

	handleOk = () => {
		this.setState({ isModalVisible: false });
	};

	handleCancel = () => {
		this.setState({ isModalVisible: false });
	};

	handleEdit = (review: any) => {
		fetch(`${APIURL}/review/edit/${this.props.editReview.id}`, {
			method: 'PUT',
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
				this.props.getProducts();
				this.props.updateOff();
			});
	};

	render() {
		return (
			<Modal title="edit" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
				<Form onFinish={this.handleEdit}>
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
			</Modal>
		);
	}
}
