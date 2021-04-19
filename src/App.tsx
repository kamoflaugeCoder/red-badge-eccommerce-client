import React, { Component } from 'react';
import { useQuery } from 'react-query';


// components
import './components/item/Items';
import Item from "./components/item/Items";
import "./components/item/Items.styles"
import "./components/LoginComponents/Auth";
import './components/theNavbar';

import { Drawer, Radio, Space, Grid, Breadcrumb } from 'antd';
import { Button, Popover, Typography } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Badge, Card, Anchor } from 'antd';
import { Spin, Alert, Menu, Dropdown } from 'antd';

import { DownOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

// styles
import { Wrapper, StyledButton } from './App.styles';
import "./App.css";
import { useState } from 'react';
// import { isConstructorDeclaration } from 'typescript';
// import { render } from '@testing-library/react';
import { Layout } from 'antd';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/AntdIcon';
import IconContext from '@ant-design/icons/lib/components/Context';


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
 await (await fetch('https://fakestoreapi.com/products/',)).json();

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
  const { Header, Footer, Sider, Content } = Layout;
  const { SubMenu } = Menu;
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
 
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const { Title } = Typography;

    return (
      // row
//         <Card>  
//           <Button type="primary">Test</Button>
//    {data?.map(item => (
// // col = width
//      <Item item={item} handleAddToCart={handleAddToCart} />
//      ))}
//      </Card>

        <>
        
        <Header style={{padding:10}}>
        <Avatar style={{float:`right`}} size={64} icon={<UserOutlined />} />
        <Title style={{color:'white'}} level={3}>Nutech Technologies, LLC</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu 
            defaultSelectedKeys={[`Dashboard`]}
            mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu
              title={
                <span>
                  {/* <Icon type="mail" /> */}
                  <span>Go To...</span>
                </span>
              }
              >
                <Menu.ItemGroup key='AboutUS'title='About US'>
                  <Menu.Item key='space1'>Space 1</Menu.Item>
                  <Menu.Item key='space2'>Space 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          </Layout>
        <Content>
        <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style= {{background: '#fff', padding: 24, minHeight: 500 }}>Content</div>
    </Content>

        <Row justify="space-around" align="middle">
        {data?.map((item) => (
          <Col span={6} style={{marginBottom: "40px"}}>
            <Popover content={content} title="Title">
            <Item item={item} handleAddToCart={handleAddToCart} />
            <Button type="primary">Hover me</Button>
           </Popover>,
          </Col>
        ))}
        </Row>
        </Content>
        
        <Footer style={{textAlign: 'center', background:"red"}}>Created By Thomas Crowell 2021</Footer>
        <Layout></Layout>
        </>
     
     );
   };
            
    
  export default App;



{/* <CardDeck>  
          <Button type="primary">Test</Button>
   {data?.map(item => (
// col = width
     <Item item={item} handleAddToCart={handleAddToCart} />
     ))}
     </CardDeck> */}




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



   


