import { FormEvent, useEffect, useState } from 'react';
 import { useQuery } from 'react-query'
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// components
// import "./components/LoginComponents/Login";
// import Header from './components/Header/Header';
// import Item from "./components/item/Item";
// import Cart from './components/cart/Cart'
import Drawer from '@material-ui/core/Drawer';
// import "./components/item/Items.styles"
import Auth from "../LoginComponents/Auth";
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
// import { Wrapper, StyledButton } from './App.styles';
// import "./App.css";
// import { isConstructorDeclaration } from 'typescript';
// import { render } from '@testing-library/react';
import App from '../../App'
import CartItem from '../cartItem/cartItem';
import Login from '../LoginComponents/Login';
import Header from '../navbar/Header';
import Navbar from '../navbar/Navbar'
import { Wrapper } from '../cart/Cart.styles';
import Item from './Item';
import { CartItemType } from '../cartItem/CartItemType'



const apiURL = 'https://fakestoreapi.com/products'


export default function ItemIndex(props: any){

const [cartItems, setCartItems] = useState([] as CartItemType[]);

useEffect(()=> {
    fetch('http://localhost:5200/product')
    .then((res)=>res.json())
    .then((json)=> {console.log(json)
    setCartItems(json)
    })
  
},[])
  return (
   
    // <h1>ItemIndex</h1>
<Grid container spacing={3}>

        {cartItems.map(item => (
        <Grid item key={item.id} xs={12} sm={4}>
          {/* <Item item={item} handleAddToCart={handleAddToCart} token={props.token} /> */}
            <Item item={item} token={props.token} />
            
        </Grid>
        ))}
        </Grid>
  )
}
  
  

// const getProducts = async (): Promise<CartItemType[]> =>
//  await (await fetch('https://fakestoreapi.com/products/',)).json();

//  const[cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([] as CartItemType[]);
//   const { data, isLoading, error} = useQuery<CartItemType[]>(
//  'products', 
//   getProducts
//   );
//  console.log(data);

// const getTotalItems = (items: CartItemType[]) =>
// items.reduce((ack: number, item) => ack + item.amount, 0);

// const handleAddToCart = (clickedItem: CartItemType) => {
//   setCartItems(prev => {
//     // 1.Is the item already added in the cart?
//     const isItemInCart = prev.find((item: { id: number; }) => item.id === clickedItem.id);

//     if (isItemInCart) {
//       return prev.map((item: { id: number; amount: number; }) => 
//         item.id === clickedItem.id
//         ? {...item, amount: item.amount + 1}
//         : item
//       );
//     }
//     // First time the item is added
//     return[...prev, {...clickedItem, amount: 1}];
//   });
// };

// const handleRemoveFromCart = (id: number) => {
//   setCartItems(prev => 
//     prev.reduce((ack: any, item: { id: number; amount: number; }) => {
//       if (item.id === id){
//         if (item.amount === 1) return ack;
//         return [...ack, {...item, amount: item.amount}];
//       }else{
//         return[...ack, item]
//       }
//     }, [] as CartItemType[])
//   )
// };

// if (isLoading) return < LinearProgress />;
// if (error) return <div> Something went wrong...</div>;



 
      // <Wrapper>
         {/* <div>
          <Header />
          {!sessionToken? <Login updateToken = {updateToken}/>:null}
        </div>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={handleRemoveFromCart}
          />
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
        </StyledButton>  */}
        {/* <Grid container spacing={3}>
        {CartItem.map(item => (
        <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>
        ))}
        </Grid> */}
      {/* </Wrapper>  */}
      



    
    // return (
    //     <div>
    //         <h1>Item Index</h1>
    //         <Grid container spacing={3}>
    //     {data?.map(item => (
    //     <Grid item key={item.id} xs={12} sm={4}>
    //       <Item item={item} handleAddToCart={handleAddToCart} />
    //     </Grid>
    //     ))}
    //     </Grid>
    //     </div>
    // )


// function setCartItems(arg0: (prev: any) => any) {
//   throw new Error('Function not implemented.');
// }
// function setCartOpen(arg0: boolean) {
//   throw new Error('Function not implemented.');
// } */
