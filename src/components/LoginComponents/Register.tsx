import { useState } from 'react'

// const apiURL = 'https://fakestoreapi.com/products';

// const Register = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const register = async () => {
//       let userObj = {
//         user: {
//           email: email,
//           password: password,
//         }
//       };

//       const response = await fetch(`${apiURL}/user/register`, {
//         method: 'POST',
//         body: JSON.stringify(userObj),

//         headers: { 
//             'Content-Type': 'application/json',
//             // 'Accept': 'application/json',
//             // 'Status': 'OK',
//           }
    
//       });
      
//   }
//     return (
//         <Container component="main" maxWidth="xs">
//             <h2 id="transition-modal-title" style={{textAlign: 'center'}}>Register.</h2>
//         <CssBaseline />
//         <div>
//           <form  noValidate>

//           <TextField
//                 variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               onChange={(e)=> setEmail(e.target.value)} 
//               value={email}
//               pattern='.+@.+.com' title='Must be in standard email format. Ex: yourname@email.com'
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={(e)=> setPassword(e.target.value)} 
//               value={password}
//             />

//             <Button
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={register}
             
//             >
//               Register
//             </Button>
//             <Grid container>

//               <Grid item>
//                 {/* onclick to fire off a function  */}

//               </Grid>
//             </Grid>
//           </form>
//         </div>
//       </Container>
//     )
// }

// export default Register