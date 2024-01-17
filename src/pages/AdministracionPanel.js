import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import SliderSection from '../components/SliderSection';
import CardAdminstracion from '../components/CardAdminstracion';
import itemSlider from "../mock/itemSlider";
import itemsCard from "../mock/itemsCard.json";
import '../assets/css/card.css'
import '../assets/css/styles.css'
import { UrlFront } from "../assets/js/utils";
import { funcionalidades } from "../assets/js/utils"

function Inicio() {
  return (
    <Container  fluid>
      <NavigationBar />
      <h2>Panel de Administración</h2>
      {
        funcionalidades.map((item) => (
          <CardAdminstracion text={item}  to= {`${UrlFront}/administracionPanel/${item}`} />
        ))
      }
    </Container> 
  );
}

export default Inicio;