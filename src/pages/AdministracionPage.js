import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getArticulos } from "../assets/js/axios/articulos/getArticulos";
import { getComentarios } from "../assets/js/axios/comentarios/getComentarios";
import { getUsuarios } from "../assets/js/axios/usuarios/getUsuarios";
import CardHorizontal from "../components/CardHorizontal";
import CardUsuario from "../components/CardUsuario";
import CardArticulo from "../components/CardArticulo";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { obtIdDesdePath } from "../assets/js/utils";
import { funcionalidades } from "../assets/js/utils";
import CardComentario from "../components/CardComentario";
import '../assets/css/styles.css'

const Inicio = () => {
  const { id } = useParams();
  const queAdministrar = obtIdDesdePath(id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (queAdministrar) {
          case "articulos":
            data = await getArticulos();
            break;
          case "comentarios":
            data = await getComentarios();
            break;
          case "usuarios":
            data = await getUsuarios();
            break;
          default:
            data = [];
        }
        setItems(data);
      } catch (error) {
      }
    };

    fetchData();
  }, [queAdministrar]); // Hacer que useEffect se ejecute cada vez que queAdministrar cambie

  return (
    <Container fluid>
      <NavigationBar />
      {queAdministrar === "articulos" ? (
  <div>
    {items.map((date) => (
      <div key={date._id}>
        <CardArticulo
          id={date._id}
          image={date.imagen}
          title={date.titulo}
          text={date.cuerpo}       
        />
      </div>
    ))}
    <div>
      <Button variant="primary" className="custom-link-button boton">
        <Link to="/nuevoArticulo">Crear nuevo artículo</Link>
      </Button>
    </div>
  </div>
) : queAdministrar === "usuarios" ? (
  items.map((date) => (
    <div key={date._id}>
      <CardUsuario
        id={date._id}
        nombre={date.usuario}
        correo={date.correo}
        nivel={date.id_profile}
      />
    </div>
  )) 
) : (
  items.map((date) => (
    <div key={date._id}>
      <CardComentario
        id={date._id}
        title={date.titulo}
        text={date.cuerpo}
        name={date.usuario}
      />
    </div>
  ))
)}
      <Footer />
    </Container>
  );
};

export default Inicio;