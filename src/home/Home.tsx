import Button from '@material-ui/core/Button';
// // Types
// import  { CartItemType  } from '../components/cartItem/CartItemType';
// // styles
// import { Wrapper } from '../components/cartItem/cartItem.styles';
// import LoginForm from '../components/LoginComponents/loginForm'




const Home = () => {
    
}
// type Props = {
//     item: CartItemType;
//     addToCart: (clickedItem: CartItemType) => void;
//     removeFromCart: (id: number) => void;
// }

// const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
//     <Wrapper>
// <div>
//    <h3>{item.title}</h3> 
// <div className='information'>
// <p>Price: ${item.price}</p>
// <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
// </div>
// <div className='buttons'>
//   <Button
//   size='small'
//   disableElevation
//   variant='contained'
//   onClick={() => removeFromCart(item.id)}  
//   >
//     -
//   </Button>
//   <p>{item.amount}</p>
//   <Button
//   size='small'
//   disableElevation
//   variant='contained'
//   onClick={() => addToCart(item)}  
//   >
//     +
//   </Button>
// </div>
// </div>
// <img src={item.image} alt={item.title} />
//     </Wrapper>
// );

export default Home;









//  const getTotalItems = (items: CartItemType[]) =>
//  items.reduce((ack: number, item) => ack + item.amount, 0);
 
//  const handleAddToCart = (clickedItem: CartItemType) => {
//    setCartItems(prev => {
//      // 1.Is the item already added in the cart?
//      const isItemInCart = prev.find((item: { id: number; }) => item.id === clickedItem.id);
 
//      if (isItemInCart) {
//        return prev.map((item: { id: number; amount: number; }) => 
//          item.id === clickedItem.id
//          ? {...item, amount: item.amount + 1}
//          : item
//        );
//      }
//      // First time the item is added
//      return[...prev, {...clickedItem, amount: 1}];
//    });
//  };
 
//  const handleRemoveFromCart = (id: number) => {
//    setCartItems(prev => 
//      prev.reduce((ack: any, item: { id: number; amount: number; }) => {
//        if (item.id === id){
//          if (item.amount === 1) return ack;
//          return [...ack, {...item, amount: item.amount}];
//        }else{
//          return[...ack, item]
//        }
//      }, [] as CartItemType[])
//    )
//  };
 
//  if (isLoading) return < LinearProgress />;
//  if (error) return <div> Something went wrong...</div>;
 
 
 
  
//         <Wrapper>
//            <div>
//            <Header />
//            {!sessionToken? <Login updateToken = {updateToken}/>:null}
//          </div>
//          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
//            <Cart 
//            cartItems={cartItems} 
//            addToCart={handleAddToCart} 
//            removeFromCart={handleRemoveFromCart}
//            />
//          </Drawer>
//          <StyledButton onClick={() => setCartOpen(true)}>
//          <Badge badgeContent={getTotalItems(cartItems)} color='error'>
//            <AddShoppingCartIcon />
//          </Badge>
//          </StyledButton>  */}
//          /* <Grid container spacing={3}>
//          {CartItem.map(item => (
//          <Grid item key={item.id} xs={12} sm={4}>
//            <Item item={item} handleAddToCart={handleAddToCart} />
//          </Grid>
//          ))}
//          </Grid> 
//         </Wrapper>  
   