// import { Button } from 'antd';
import { SwitchClickEventHandler } from 'antd/lib/switch';
// import { CardDeck } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck, CardGroup
} from 'reactstrap';

// Types
import  { CartItemType  } from '../../App';
// styles
import { Wrapper } from './Items.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ( {item, handleAddToCart,  }) => {
 
return(
    <Card className="m-2" style={{ minWidth:"200px"}}>
      <CardImg top width ="100%" src={item.image} alt={item.title}  />
      <CardBody>
        <CardTitle tag="h5">{item.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}</CardSubtitle>
        <CardText>{item.description}</CardText>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </CardBody>
    </Card>
)
};

 




       /* <Card>
         <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
         <CardBody>
           <CardTitle tag="h5">Card title</CardTitle>
           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
           <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
           <Button>Button</Button>
         </CardBody>
       </Card>
       <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
           <CardTitle tag="h5">Card title</CardTitle>
           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>  */

    export default Item;