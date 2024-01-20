import React from "react";
import { Card, Button } from "react-bootstrap";
import '../assets/css/styles.css'
import { Link } from 'react-router-dom';
import { deleteUsuario } from "../assets/js/axios/usuarios/deleteUsuario";

const CardUsuario = ({ nombre, correo, nivel, id }) => {

  const handleEliminarUsuario = async () => {
    try {
      // Llama a la función para eliminar el comentario
      await deleteUsuario(id);
      // Redirige a la página administracionPanel después de eliminar el usuario
      window.location.href = '/usuarios';
    } catch (error) {
      console.error("Error al eliminar el comentario", error);
    }
  };

  return (
    <Card className="mb-3 card spacing_top">
      <div className="row no-gutters">
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{correo}</Card.Text>
  
            {nivel === 1 && <Card.Text>Es administrador</Card.Text>}
            {nivel === 2 && <Card.Text>Es usuario</Card.Text>}
            <Button variant="warning custom-link-button boton" onClick={handleEliminarUsuario}>
              Eliminar Usuario
            </Button>
            <Button variant="secondary custom-link-button boton">
              <Link to={`/editUsuario/${id}`}>Editar Usuario</Link>
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
  
export default CardUsuario;
