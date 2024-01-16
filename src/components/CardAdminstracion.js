import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../assets/css/styles.css";

const CardAdminstrador = ({ text, to }) => {
  return (
    <Link to={to} className="card-link">
      <Card className="mb-3 card spacing_top">
        <div className="row no-gutters">
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>Administrar {text}</Card.Title>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardAdminstrador;
