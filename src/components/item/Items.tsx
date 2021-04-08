import { Button } from 'antd';
import { SwitchClickEventHandler } from 'antd/lib/switch';
import { CardDeck } from 'reactstrap';


// Types
import  { CartItemType  } from '../../App';
// styles
import { Wrapper } from './Items.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ( {item, handleAddToCart,  }) => (
    <Wrapper>
        <img src={item.image} alt={item.title}  />
    <div>  
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
);

 




       {/* <Card>
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
    </CardDeck>  */}

    export default Item;