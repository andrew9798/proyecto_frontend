// import '../assets/Card' //no funciona el import 
import React from "react";
import { Card } from "react-bootstrap";

const CardProyectos = ({ title, text, image }) => {
  return (
    <Card
      className="custom-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </div>
    </Card>
  );
};

export default CardProyectos;