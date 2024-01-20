import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { getComentarios } from "../assets/js/axios/comentarios/getComentarios"; // Ruta de getArticulos
import CardComentario from "../components/CardComentario";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const Articulos = () => {
  const [comentario, setComentario] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const data = await getComentarios();
        setComentario(data); // Actualiza el estado con los datos de la API
        console.log(data);
      } catch (error) {
        // Manejar el error según sea necesario
      }
    };

    data(); // Llama a la función para obtener los datos al montar el componente
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <Container  fluid>
      <NavigationBar />
      {comentario &&
        Array.isArray(comentario) &&
        comentario.map((date) => (
          <CardComentario
            key={date._id}
            id={date._id}
            image={date.imagen}
            title={date.titulo}
            text={date.cuerpo}
          />
        ))}
      <Button variant="primary" className="custom-link-button">
        {" "}
        <Link to={`/articulos/nuevoArticulo}`}>Saber más</Link>
      </Button>
      <Button variant="primary" className="custom-link-button">
        {" "}
        <Link to={`/articulos/editArticulo}`}>Saber más</Link>
      </Button>

      <Footer />
    </Container>
  );
};

export default Articulos;
