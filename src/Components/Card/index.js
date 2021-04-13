import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
    const items = props.pList;
        
    return (
        items.map(p=>
        <div>
            <Card>
              <CardImg top width="100%" src={p.image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{p.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{p.price}</CardSubtitle>
                <CardText>{p.description}</CardText>
                <CardText>{p.type}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>)
      
    );
  };

export default Example;
