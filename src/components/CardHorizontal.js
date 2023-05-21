import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/styles.css'

const CardHorizontal = ({ image, title, text }) => {
  return (
    <Card className="mb-3 card spacing_top">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Card.Img variant="top" src={image} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Saber más</Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CardHorizontal;