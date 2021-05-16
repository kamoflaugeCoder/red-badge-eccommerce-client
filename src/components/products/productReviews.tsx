import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Menu } from 'antd';
import { Button } from 'reactstrap';

type Props = {
	token: any;
	item: any;
	createReview: any;
};

const ProductReview: React.FC<Props> = ({ token, item, createReview }) => {
	const [
		value,
		setValue
	] = React.useState<number | null>(2);

	const [
		name,
		setName
	] = useState('');
	const [
		title,
		setTitle
	] = useState('');
	const [
		date,
		setDate
	] = useState('');
	const [
		entry,
		setEntry
	] = useState('');

	/**DISPLAY BY USER */
	function displayMine() {
		const accessToken = localStorage.getItem('SessionToken');
		fetch('http://localhost:5200/review/mine', {
			method: 'GET',
			headers: new Headers(
				{
					// 'Content-Type': 'application/json',
					// 'Authorization': token
				}
			)
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
	}

	/* DISPLAY ALL */

	function display() {
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

	/* DISPLAY BY TITLE */

	//  function displayByTitle(){
	//    fetch(`http://localhost:5200/review/${review}`,{
	//      method:'GET',
	//      headers: new Headers({
	//        'Content-Type': 'application/json'
	//      })
	//     })
	//     .then(
	//       function(response){
	//         return response.json()
	//       })
	//       .catch(
	//         function (error){
	//           console.error('Error:', error)
	//         })
	//         .then(function (response){
	//           console.log(response)
	//         })
	//    console.log('displayByTitle Function Called')

	//  POST JOURNAL

	function postReview(e:any) {
		e.preventDefault()
		fetch(`http://localhost:5200/review/create/${createReview.id}`, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: token
			}),
			body: JSON.stringify({
			
				name: name,
				title: title,
				date: date,
				entry: entry
				
			})
		})
			.then((response) => {
				console.log(response.json());
				// displayMine();
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('postJournal Function Called');
	}

	// UPDATE JOURNAL
	function editReview(postId: any) {
		console.log(postId);
		const fetch_url = `http://localhost:5200/review/update/${postId}`;
		const accessToken = localStorage.getItem('SessionToken');
		// console.log('editJournal Function Called')
		const response = fetch(fetch_url, {
			method: 'PUT',
			headers: {
				// 'Content-Type': 'application/json',
				// 'Authorization': token
			},
			body: JSON.stringify({
				name: name,
				title: title,
				date: date,
				entry: entry
			})
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				displayMine();
			});
	}

	// DELETE JOURNAL
	function deleteReview(postId: any) {
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
			displayMine();
		});
	}

	return (
		<div>
			<Box component="fieldset" mb={3} borderColor="transparent">
				<Typography component="legend">Rating</Typography>
				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
				<Menu>
					<form onSubmit={postReview}>
						<label>Name</label>
						<input type="text" onChange={(e) => setName(e.target.value)} value={name} name="name" />

						<label>Title</label>
						<input type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="title"/>

						<label>Date</label>
						<input type="text" onChange={(e) => setDate(e.target.value)} value={date} name="date" />

						<label>Entry</label>
						<input type="text" onChange={(e) => setEntry(e.target.value)} value={entry} name="entry" />

						<button type="submit">Submit Review</button>
					</form>
				</Menu>
			</Box>
		</div>
	);
};

export default ProductReview;

// function updateReview(updateReview: any): BodyInit | null | undefined {
//   throw new Error('Function not implemented.');
// }
// function accessToken(accessToken: any): BodyInit | null | undefined {
//   throw new Error('Function not implemented.');
// }

// function newEntry(newEntry: any): BodyInit | null | undefined {
//   throw new Error('Function not implemented.');
// }
