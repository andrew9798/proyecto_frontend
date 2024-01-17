import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/styles.css'
import { Link } from 'react-router-dom';

const CardUsuario = ({ nombre, correo, id }) => {
    return (
      <Card className="mb-3 card spacing_top">
        <div className="row no-gutters">
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{correo}</Card.Text>
  
              {id === 1 && <Card.Text>Es administrador</Card.Text>}
              {id === 2 && <Card.Text>Es usuario</Card.Text>}
  
              <Button variant="primary" className="custom-link-button boton">
              </Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    );
  };
  
  export default CardUsuario;