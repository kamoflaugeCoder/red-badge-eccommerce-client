import { useState, useEffect } from 'react'


import { Button } from 'antd';
import { Input, Space, Row, Col } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


// const apiURL = 'https://fakestoreapi.com/products';



// const Login = () => {
  
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

 
//     const handleSubmit = () => {
//       e.preventDefault()
//       fetch(`${apiURL}/user/login`, {
//         method: 'POST',
//         body: JSON.stringify({user:{email: email, password: password}}),
//         headers: new Headers({
//           'Content-Type': 'application/json'
//         })
//       }) .then(
//         (response) => response.json()
//       ) .then((data)=> {
//         props.updateToken(data.sessionToken)
       
//       })
      
//     }



//     return(
        
//         <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
//             <h2 id="transition-modal-title" style={{textAlign: 'center'}}>Sign in.</h2>
//         <CssBaseline />
//         <div>
//           <form  noValidate>
//             <TextField
//               variant="outlined"
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
// <div>
//   <Space direction="vertical">
//     <Input.Password placeholder="input password" />
//     <Input.Password
//       placeholder="input password"
//       iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//     />
//   </Space>,<Space direction="vertical">
//     <Input.Password placeholder="input password" />
//     <Input.Password
//       placeholder="input password"
//       iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//     />
//   </Space>,
// <Button type="primary">Test</Button>
//   </div>

            
//     )


// export default Login;