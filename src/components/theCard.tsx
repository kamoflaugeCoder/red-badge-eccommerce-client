import Item from 'antd/lib/list/Item';
import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class theCard extends React.Component {
    constructor( props: any){
        super(props);
}

//  <CardDeck>
  //   {data?.map(item => (
  //    <Item item={item} handleAddToCart={handleAddToCart} />
  //  ))}
   /* </CardDeck> */
  //  return(
// <card />
    // );

render( ){
    return(
    <div>
      {/* <Card>
        <CardImg top width="100%"  src={item.image} alt={item.title}  />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">${item.price}</CardSubtitle>
          <CardText>{item.description}</CardText>
          <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
        </CardBody>
      </Card> */}
    </div>

    )
};
}

export default Card;

