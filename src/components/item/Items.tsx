// import { Button } from 'antd';
import { SwitchClickEventHandler } from 'antd/lib/switch';
// import { CardDeck } from 'reactstrap';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button, CardDeck, CardGroup
// } from 'reactstrap';

// import { Container, Row, Col } from 'reactstrap';
import { Card, Button,Col, Row, Menu, Dropdown  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// Types
import  { CartItemType  } from '../../App';
import { Wrapper } from './Items.styles';

// styles
import { Carousel } from 'antd';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Meta } = Card;
const Item: React.FC<Props> = ( {item, handleAddToCart,  }) => {
 

      
      
return(
  <>
  <Row>
  <Card
    style={{ width: 300}}
      cover={<img alt= "" src={item.image} style={{width: "100%", height: "10vw", objectFit: "cover"}} />}
      >
      <Meta title= {item.title} description={item.description}/>${item.price}
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        
    </Card>
    </Row> 
</>
  
)
};


{/* <CardDeck>
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
    </CardDeck> */}

    export default Item;