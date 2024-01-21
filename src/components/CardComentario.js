import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/styles.css'
import { Link } from 'react-router-dom';
import { deleteComentario } from "../assets/js/axios/comentarios/deleteComentario";

const CardComentario = ({ title, text, name, id }) => {
  const handleEliminarComentario = async () => {    //Función que se ejecutará cuando demos click al botón Eliminar mensajes
    try {
      // Llama a la función para eliminar el comentario
      await deleteComentario(id);
    } catch (error) {
      console.error("Error al eliminar el comentario", error);
    }
  };

  return (
    <Card className="mb-3 card spacing_top">
      <div className="row no-gutters">
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text>{name}</Card.Text>
            <Button variant="warning custom-link-button boton" onClick={handleEliminarComentario}>
              <Link to={`/administracionPanel/comentarios`}>Eliminar Comentario</Link>
            </Button>
            <Button variant="secondary custom-link-button boton">
            <Link to={`/editComentario/${id}`}>Editar Comentario</Link>
          </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default CardComentario;