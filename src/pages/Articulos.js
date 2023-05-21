import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import CardProyectos from "../components/CardProyectos";
import NavigationBar from "../components/NavigationBar";
import itemsCard from "../mock/itemsCard.json";
import getArticulos from "../assets/js/axios/articulos";


const Articulos = () => {

  useEffect(() => {
    getArticulos();
  });

    return (
        <Container className="container" fluid>
        <NavigationBar />
        {
        itemsCard.map((data) => {
            return (           
              <CardProyectos 
              imageSrc={data.imagen}
              title={data.titulo}
              text={data.cuerpo}
              />   
            )
        }
      )}
      <Footer />
    </Container>
    )  
}

export default Articulos;