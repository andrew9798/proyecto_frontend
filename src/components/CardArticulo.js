import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/styles.css'
import { Link, useLocation } from 'react-router-dom';
import { deleteArticulo } from "../assets/js/axios/articulos/deleteArticulo";

const CardArticulo = ({ image, title, text, id }) => {
  const MAX_TEXT_LENGTH = 500;
  const location = useLocation();

  const truncatedText = text.length > MAX_TEXT_LENGTH
    ? `${text.slice(0, MAX_TEXT_LENGTH)}...`
    : text;

    const handleEliminarArticulo = async () => {
      try {
        await deleteArticulo(id);
        window.location.reload(); // Recarga la página después de eliminar el artículo
      } catch (error) {
        console.error("Error al eliminar el artículo", error);
      }
    };

  const isAdministracionPanel = location.pathname.startsWith('/administracionPanel');

  return (
    <Card className="mb-3 card spacing_top">
      <div className="row no-gutters">
        <div className="col-md-4">
          <Card.Img variant="top" src={image} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{truncatedText}</Card.Text>
            {isAdministracionPanel ? (
              <>
                <Button variant="warning custom-link-button boton" onClick={handleEliminarArticulo}>
                  Eliminar Artículo
                </Button>
                <Button variant="secondary custom-link-button boton">
                  <Link to={`/editArticulo/${id}`}>Editar Articulo</Link>
                </Button>
              </>
            ) : (
              <Button variant="primary custom-link-button boton">
                <Link to={`/articulos/${id}`}>Saber más</Link>
              </Button>
            )}
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CardArticulo;