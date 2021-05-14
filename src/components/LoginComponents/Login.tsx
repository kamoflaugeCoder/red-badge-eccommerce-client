import React, { useReducer, useEffect, useState, FormEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

const apiURL = 'https://fakestoreapi.com/products';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
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

//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean }
  | { type: 'registerSuccess', payload: string }
  | { type: 'registerFailed', payload: string }

//   | { type: 'setLogin', payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
      case 'registerSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
      case 'registerFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
  }
}

interface LoginProps{
    updateToken: (newToken: string) => void;
    updateUserRole: any;
    // setSessionToken: (newToken: string) => void;

};

// interface RegisterProps{
//     updateToken: (newToken: string) => void;
//     setSessionToken: (newToken: string) => void;

// };

// interface handleSubmitProps 0502{
//     setSessionToken:React.Dispatch<React.SetStateAction<string>>
// }

export default function Login(props: LoginProps){
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [Login, setLogin] = useState('');


// LOGIN FETCH RIGHT HERE==============================
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:5200/user/login`, {
      method: 'POST',
      body: JSON.stringify({user:{email: email, password: password}}),
      headers:{
        'Content-Type': 'application/json'
      }
    }) .then(
      (response) => response.json()
    ) .then((data)=> {
      props.updateToken(data.sessionToken)
      props.updateUserRole(data.user.userRole)
     console.log(data)
    })
    
  }

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   fetch("http:")
  // }
  
  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  // const handleRegister = () => {
  //   if (state.username === 'abc@email.com' && state.password === 'password') {
  //     dispatch({
  //       type: 'registerSuccess',
  //       payload: 'Registered Successfully'
  //     });
  //   } else {
  //     dispatch({
  //       type: 'registerFailed',
  //       payload: 'Incorrect username or password'
  //     });
  //   }
  // };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit= {handleSubmit}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="email"
              type="email"
              label="email"
              placeholder="email"
              value = {email}
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            type = "submit"
            >
            Login
          </Button>
          {/* <Button 
            variant="contained"
            size="large"
            color="secondary"
            className={classes.registerBtn}
            onClick={handleRegister}
            type = "submit"
            >
            Register
          </Button> */}
        </CardActions>
      </Card>
    </form>
  );
}

