import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Container } from 'reactstrap';
import { Button, Form, Modal, Input } from 'antd';
import { RateReview } from '@material-ui/icons';
import ReviewEdit from './reviewEdit';
import APIURL from "../../helpers/environment"

type state = {
	name: string;
	title: string;
	date: string;
	entry: [];
	updateActive: boolean;
    editReview: {}
};

type Props = {
	item: any;
	token: any;
	getProducts: any;
};

export default class ReviewView extends Component<Props, state> {
	constructor(props: Props) {
		super(props);
		this.state = {
			name: '',
			title: '',
			date: '',
			entry: [],
			updateActive: false,
            editReview: {}
		};
	}

    updateEditReview = (review: any) => {
        this.setState({editReview: review})
        console.log(this.state.editReview)
    }

	updateOn = () => {
		this.setState({ updateActive: true });
	};

	updateOff = () => {
		this.setState({ updateActive: false });
	};

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
	componentDidMount() {
		// this.display();
		console.log(this.props.item);
	}
	handleDelete = (review: any) => {
		fetch(`${APIURL}/review/delete/${review.id}`, {
			method: 'DELETE',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.props.token
			})
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				this.props.getProducts();
			});
	};

	render() {
		return (
			<div>
				{this.props.item.reviews.map((review: any) => (
					<div>
						<Container>
							<div key={review.id} style={{ overflow: 'hidden', padding: '0px' }}>
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
							<Button type="text" onClick={() => {
                                this.updateOn()
                                this.updateEditReview(review)
                            }}>
								Edit
							</Button>
							<Button type="text" onClick={() => this.handleDelete(review)}>
								{/* this.handleDelete(review) */}
								Delete
							</Button>
						</Container>
					</div>
				))}
                {this.state.updateActive ? (
                    <ReviewEdit token={this.props.token} item={this.props.item} getProducts={this.props.getProducts} updateOff={this.updateOff} editReview={this.state.editReview} />
                ) : (
                    <></>
                )}
			</div>
		);
	}
}
