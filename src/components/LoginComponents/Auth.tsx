import { Button } from 'antd';

// import Login from './Login'
// import Register from './Register'

// const Auth = (props) => {

//     // STATE
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
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
//     const authTernary = () => {

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
// }
// export default Auth;

