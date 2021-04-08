import React, { Component } from 'react';
import { useQuery } from 'react-query';
import './components/item/Items';

// components
import Item from "./components/item/Items";
import{ Container, Row, Col } from 'reactstrap';
// import { Drawer, Button, Radio, Space, Grid } from 'antd';
// import { Row, Col, Divider } from 'antd';
import { Badge } from 'antd';
import { Spin, Alert } from 'antd';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

// styles
import { Wrapper } from './App.styles';
import "./App.css";
import { useState } from 'react';
// import { isConstructorDeclaration } from 'typescript';
// import { render } from '@testing-library/react';

//Types
export type CartItemType = {
  id: number;
  category:string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
 await (await fetch('https://fakestoreapi.com/products',)).json();

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



// class App extends Component<{}, CartItemType>{
// constructor (props:CartItemType){
//   super(props);
//   this.state = {
//           id: 0,
//           category:"",
//           description: "",
//           image: "",
//           price: 0,
//           title: "",
//           amount: 0,
//   };
// };
const App = ( ) =>{
  const[cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error,} = useQuery<CartItemType[]>(
 'products', 
  getProducts
  );
  console.log(data);

const getTotalItems = () => null;

const handleAddToCart = (clickedItem: CartItemType) => null;

const handleRemoveFromCart = () => null;

if (isLoading) return < Spin />;
if (error) return <div> Something went wrong...</div>;
 
//    render(){
//     return(
//       <Container fluid>
//         <Row>
//           <Col>
//          <Card />
//           </Col>
//         </Row>
//       </Container>
//     )
//   };
// }
  // class App extends React.Component{
  //   render(){
  //     this.state = [
  //       {id: "number"},
  //       {category:"string"},
  //       {description: "string"},
  //       {image: "string"},
  //       {price: "number"},
  //       {title: "string",},
  //       {amount: "number"},
  //     ];
  //     // return(
       
        
    return (
      <Wrapper>
        <CardDeck>
   {data?.map(item => (
     <Item item={item} handleAddToCart={handleAddToCart} />
     ))}
     </CardDeck>
   </Wrapper>
     );
   };
            
    
  export default App;








  //   return(
  //     <div>
  //       <Card>
  //       <CardImg top width="100%" src="https://fakestoreapi.com/products" />
  //       <CardBody>
  //         <CardTitle tag="h5">Card title</CardTitle>
  //         <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
  //         <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
  //         <Button>Button</Button>
  //       </CardBody>
  //     </Card>
  //     </div>
  //   )
  // }



   


