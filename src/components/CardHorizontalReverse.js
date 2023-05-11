import React from "react";
import { Card, Button } from "react-bootstrap";

const CardHorizontalReverse = ({ imageSrc, title, text }) => {
  return (
    <Card className="mb-3">
      <div className="row no-gutters">
      <div className="col-md-6">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Saber más</Button>
          </Card.Body>
        </div>
        <div className="col-md-6">
          <Card.Img variant="top" src={imageSrc} />
        </div>
      </div>
    </Card>
  );
};

export default CardHorizontalReverse;