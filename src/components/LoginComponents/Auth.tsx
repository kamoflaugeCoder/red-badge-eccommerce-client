import { Component, CSSProperties } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';

import Login from '../LoginComponents/Login'
import Register from '../LoginComponents/Register'

interface exceptedProps{
    // token:any
    updateToken:(newToken:string) => void
}


interface AuthState {
    username: string,
    password: string,
    login: boolean,
    register: boolean
}
export default class Auth extends Component<exceptedProps, AuthState>{
    [x: string]: any;
    buttonPink: any;
    buttonDark: CSSProperties | undefined;
    containerStyles: CSSProperties | undefined;
    constructor(props: any) {
        super(props);
         // STATE
        this.state = {
            username: '',
            password: '',
            login: true,
            register: true
        }
    }
   

    // STYLES 
    //  buttonPink = {
    //   marginTop: '30px',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   width: '90%',
      
    // }
    
    // const buttonDark = {
    //   marginTop: '30px',
    //   backgroundColor: '#101f27',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   width: '90%',
    // }

    // const containerStyles = {
    //   display: 'grid',
    // }


    // LOGIC 
    // Allows for a display depending on toggle. Keep this for future code. Useful.
    
    authTernary(){
      return this.state.login ? (
        // updateToken={updateToken}
        //   <Login />
    null
      ) : (
          this.state.register 
      
      
      );

      function setLogin() {
        throw new Error('Function not implemented.');
    }
    
    function setUsername(arg0: any, string: any) {
        throw new Error('Function not implemented.');
    }
    
    function setPassword(arg0: any, string: any) {
        throw new Error('Function not implemented.');
    }
    
    function arg0(arg0: any, string: any) {
        throw new Error('Function not implemented.');
    }

      }
    }



// setLogin(arg0: boolean) {
//     throw new Error('Function not implemented.');
// }

//  setUsername(arg0: string) {
//     throw new Error('Function not implemented.');
// }

//  setPassword(arg0: string) {
//     throw new Error('Function not implemented.');
// }

//+++++++++++++++++=++===++++++==+++=+=+=====+=++++=+++

// function setLogin() {
//     throw new Error('Function not implemented.');
// }

// function setUsername(arg0: any, string: any) {
//     throw new Error('Function not implemented.');
// }

// function setPassword(arg0: any, string: any) {
//     throw new Error('Function not implemented.');
// }

// function arg0(arg0: any, string: any) {
//     throw new Error('Function not implemented.');
// }


