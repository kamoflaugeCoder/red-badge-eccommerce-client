import { useState } from 'react'
// import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container';

// import Login from '../LoginComponents/Login'
// import Register from '../LoginComponents/Register'

// import './Login'
// import './Register'

const Auth = () => {

//     // STATE
//     const [username, setUsername] =('')
//     const [password, setPassword] =('')
//     const [login, setLogin] = useState(true)


//     // STYLES 
//     const buttonPink = {
//       marginTop: '30px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       width: '90%',
      
//     }
    
//     const buttonDark = {
//       marginTop: '30px',
//       backgroundColor: '#101f27',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       width: '90%',
//     }

//     const containerStyles = {
//       display: 'grid',
//     }


//     // LOGIC 
//     // Allows for a display depending on toggle. Keep this for future code. Useful.
//     export default class authTernary extends Component{

//       return login ? (
//           <Login updateToken={props.updateToken} />
//       ) : (
//           <Register  />
//       );
//   };




//   const loginToggle = (event) => {
//     event.preventDefault();

//     setLogin(!login);

//     setUsername('');
//     setPassword('');
// };



//     return (
//       <div>
//         <Container style={containerStyles}>{authTernary()}
//         <Button 
//         variant="contained" 
//         color="secondary" 
//         onClick={loginToggle} 
//         style={login? buttonPink : buttonDark }>
          
//           {login? "Register" : "Login"}

//         </Button>
//         </Container>
       
    
//       </div>
//     )
}
export default Auth;

