import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import itemsCard from "../mock/itemsCard.json";
import Footer from "../components/Footer";
import CardHorizontal from '../components/CardHorizontal';

const Proyectos = () => (

    <Container fluid>
        <NavigationBar />
        {
        itemsCard.map((items) => {
          return (
            <CardHorizontal 
              image={items.image}
              title={items.title}
              text={items.text}
            />
          )
        })
      }
      <Footer />
    </Container>
)

export default Proyectos