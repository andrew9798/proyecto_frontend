import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getArticulo } from "../assets/js/axios/articulos/getArticulo"; // Ruta de getArticulo
import { getComentariosByArticulo } from "../assets/js/axios/comentarios/getComentariosByArticulo";
import { obtIdDesdePath } from "../assets/js/utils";
import CardHorizontal from "../components/CardHorizontal";
import CardComentario from "../components/CardComentario";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Articulos = () => {
  const [articulo, setArticulo] = useState(null);
  const [comentario, setComentario] = useState(null);

  const pathArticuloId = window.location.pathname; //Respuesta /articulo/:id
  const articuloId = obtIdDesdePath(pathArticuloId); //Respueta /:id

  useEffect(() => {
    const fetchDataArticulo = async () => {
      try {
        const data = await getArticulo(pathArticuloId);
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
    <Container className="container" fluid>
      <NavigationBar />
      {articulo && (
        <CardHorizontal
          id={articulo._id}
          image={articulo.imagen}
          title={articulo.titulo}
          text={articulo.cuerpo}
        />
      )}
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
