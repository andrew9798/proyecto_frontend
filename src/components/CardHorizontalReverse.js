import React from "react";
import { Card, Button } from "react-bootstrap";

const CardHorizontalReverse = ({ image, title, text }) => {
  return (
    <Card className="mb-3 card spacing_top">
      <div className="row no-gutters">
      <div className="col-md-8">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Saber más</Button>
          </Card.Body>
        </div>
        <div className="col-md-4">
          <Card.Img variant="top" src={image} />
        </div>
      </div>
    </Card>
  );
};

export default CardHorizontalReverse;