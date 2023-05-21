import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import SliderSection from '../components/SliderSection';
import CardHorizontal from '../components/CardHorizontal';
import CardHorizontalReverse from '../components/CardHorizontalReverse';
import itemSlider from "../mock/itemSlider";
import itemsCard from "../mock/itemsCard.json";
import aboutMe from "../mock/aboutMe.json";
import Footer from "../components/Footer";
import '../assets/css/card.css'
import '../assets/css/styles.css'

function Inicio() {
  return (
    <Container  fluid>
      <NavigationBar />
      <SliderSection items={itemSlider}
        imageSrc={itemSlider.imageSrc}
        title={itemSlider.title}
        text={itemSlider.text}
      />
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

      <CardHorizontalReverse items={aboutMe}
          image={aboutMe.image}
          title={aboutMe.title}
          text={aboutMe.text}
      />
      <Footer />
    </Container>
  );
}

export default Inicio;