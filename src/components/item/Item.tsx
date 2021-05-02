import Button from '@material-ui/core/Button';
// Types
import  { CartItemType  } from '../cartItem/CartItemType';
// styles
import { Wrapper } from './Items.styles';
// import LoginForm from '../LoginComponents/loginForm'


// import { SwitchClickEventHandler } from 'antd/lib/switch';
// import { CardDeck } from 'reactstrap';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, CardDeck, CardGroup
// } from 'reactstrap';

// import { Container, Row, Col } from 'reactstrap';




type Props = {
    item: CartItemType;
    // handleAddToCart: (clickedItem: CartItemType) => void;
    token:any
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Item: React.FC<Props> = ({item,}) => (
  
<Wrapper>
  <img src={item.image} alt={item.title} />
  <div>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <h3>${item.price}</h3>
  </div>
  {/* <Button onClick={() => handleAddToCart(item)}>Add to cart</Button> */}
</Wrapper>
 );    
  
      
// return(
//   <Wrapper>
//   <Row>
//   <Card
//     style={{ width: 300}}
//       cover={<img alt= "" src={item.image} style={{width: "100%", height: "10vw", objectFit: "cover"}} />}
//       >
//       <Meta title= {item.title} description={item.description}/>${item.price}
//         <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        
//     </Card>
//     </Row> 
// </Wrapper>
  




/* <CardDeck>
       <CardDeck>
         <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
         <CardBody>
           <CardTitle tag="h5">Card title</CardTitle>
           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Button</Button>
         </CardBody>
       </CardDeck>
       <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
           <CardTitle tag="h5">Card title</CardTitle>
           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck> */

    export default Item;