import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import CardProyectos from "../components/CardProyectos";
import itemsCard from "../mock/itemsCard.json";

const Proyectos = () => (

    <Container fluid>
        <NavigationBar />
        {
        itemsCard.map((items) => {
            return (           
              <CardProyectos 
              imageSrc={items.imageSrc}
              title={items.title}
              text={items.text}
              />   
            )
        }
      )}
    </Container>
)

export default Proyectos