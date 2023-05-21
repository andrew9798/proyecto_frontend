import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import itemsCard from "../mock/itemsCard.json";
import getArticulos from "../assets/js/axios/articulos";
import Footer from "../components/Footer";
import CardHorizontal from "../components/CardHorizontal";


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
              <CardHorizontal 
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