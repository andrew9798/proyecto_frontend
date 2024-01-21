import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { getArticulo } from "../assets/js/axios/articulos/getArticulo"; // Ruta de getArticulo
import { getComentariosByArticulo } from "../assets/js/axios/comentarios/getComentariosByArticulo";
import { obtIdDesdePath } from "../assets/js/utils";
import { Link } from 'react-router-dom';
import CardHorizontal from "../components/CardHorizontal";
import CardComentario from "../components/CardComentario";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import NuevoComentario from "./NuevoComentario";

const Articulos = () => {
  const [articulo, setArticulo] = useState(null);
  const [comentario, setComentario] = useState(null);

  const pathArticuloId = window.location.pathname; //Respuesta /articulo/:id
  const articuloId = obtIdDesdePath(pathArticuloId); //Respueta /:id

  useEffect(() => {
    const fetchDataArticulo = async () => {
      try {
        const data = await getArticulo(articuloId);
        setArticulo(data); // Actualiza el estado con los datos de la API
        console.log(data);
      } catch (error) {
        // Manejar el error según sea necesario
      }
    };

    const fetchDataComentarios = async () => {
      try {
        const data = await getComentariosByArticulo(articuloId);
        setComentario(data); // Actualiza el estado con los datos de la API
        console.log(data);
        console.log(comentario);
      } catch (error) {
        // Manejar el error según sea necesario
      }
    };

    fetchDataComentarios(); // Llama a la función para obtener los datos al montar el componente
    fetchDataArticulo(); // Llama a la función para obtener los datos al montar el componente
  }, [pathArticuloId, articuloId]);

  // useEffect(() => {
  //     const fetchDataComentarios = async () => {
  //         try {
  //             const data = await getComentariosByArticulo(articuloId);
  //             setArticulo(data); // Actualiza el estado con los datos de la API
  //             console.log(data);
  //         } catch (error) {
  //             // Manejar el error según sea necesario
  //         }
  //     };

  //     fetchDataComentarios(); // Llama a la función para obtener los datos al montar el componente
  // }, [articuloId]);

  return (
    <Container fluid>
      <NavigationBar />
      {articulo && (
        <CardHorizontal
          id={articulo._id}
          image={articulo.imagen}
          title={articulo.titulo}
          text={articulo.cuerpo}
        />
      )}
      {
        <div className="formulario cajaComentarios">
          <h3>Añade un nuevo comentario</h3>
          <NuevoComentario id={articuloId} />
        </div>
      }
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
      <Footer />
    </Container>
  );
};

export default Articulos;
