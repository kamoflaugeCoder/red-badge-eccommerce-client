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
      <Card>
        <CardImg top width="100%" src="https://fakestoreapi.com/products" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>

    )
};
}

export default Card;

