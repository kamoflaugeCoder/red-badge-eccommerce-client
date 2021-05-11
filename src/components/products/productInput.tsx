import React, { useReducer, useEffect, useState, FormEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Wrapper, StyledButton } from '../../App.styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


// type useState = {
// 	category: string;
// 	title: string;
// 	description: boolean;
// 	helperText: string;
// 	isError: boolean;
// 	registerSuccess: string;
// 	registerFailed: string;
//   dispatch:boolean
// };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    regBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    delBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    registerBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1
      },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

// interface ProductInputProps{
//   updateToken: (newToken: string) => null;
// };
export default function ProductInput(props:any){

//=====================FETCH IS HERE=========================
// const ProductInput = (props: any) => {
	const classes = useStyles();
	const [ category, setCategory ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ image, setImage ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ amount, setAmount ] = useState('');
  const [state, dispatch] = useState('')

	const handleSubmit = (e:any) => {
		e.preventDefault();

		fetch(`http://localhost:5200/product/create`, {
			/*${apiURL}*/
			method: 'POST',
			body: JSON.stringify({
				product: {
					category:category,
					title: title,
					description: description,
					image: image,
					price: price,
					amount: amount,
          dispatch: dispatch
				}
			}),
			headers:new Headers({
        'Content-Type': 'application/json', 
        "Authorization" : props.token
      })
		})
			.then((response) => response.json())
			.then((data) => {
        console.log(data)
        setCategory('')
        setTitle('')
        setDescription('')
        setImage('')
        setPrice('')
        setAmount('')

				// props.updateToken(data.sessionToken); /* Probably not right functionality */
			});
	};

	// useEffect(() => {
	//   if (useState.category.trim() && useState.price.trim()) {
	//    dispatch({
	//      type: 'setIsButtonDisabled',
	//      payload: false
	//    });
	//   } else {
	//     dispatch({
	//       type: 'setIsButtonDisabled',
	//       payload: true
	//     });
	//   }
	// }, [state.category, state.price]);


  


  const handleInput = () => {
  //   if (state.username === 'abc@email.com' && state.password === 'password') {
  //     dispatch({
  //       type: 'loginSuccess',
  //       payload: 'Login Successfully'
  //     });
  //   } else {
  //     dispatch({
  //       type: 'loginFailed',
  //       payload: 'Incorrect username or password'
  //     });
  //   }
  };

   

return (
<Box component="span" m={1}>
	<form className={classes.card} noValidate autoComplete="on" onSubmit={handleSubmit}>
  <TextField id="filled-basic" label="category" variant="filled" onChange={(e) => setCategory(e.target.value)}/>
  <TextField id="filled-basic" label="title" variant="filled" onChange={(e) => setTitle(e.target.value)}/>
  <TextField id="filled-basic" label="description" variant="filled"onChange={(e) => setDescription(e.target.value)}/>
  {/* <TextField id="filled-basic" label="Image" variant="filled" onChange={(e) => setImage(e.target.value)}/> */}
  <TextField id="filled-basic" label="Price" variant="filled" onChange={(e) => setPrice(e.target.value)}/>
  <TextField id="filled-basic" label="amount" variant="filled" onChange={(e) => setAmount(e.target.value)}/>
  <br></br>
  <Button
   variant="contained"
   size="small"
   color="primary"
   className={classes.regBtn}
   type = "submit"
   >
     Submit
   </Button>
   
</form>
</Box>
	);
};


