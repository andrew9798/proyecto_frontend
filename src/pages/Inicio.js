import React from 'react';
import { Container } from "react-bootstrap";
import NavigationBar from '../components/NavigationBar';
import SliderSection from '../components/SliderSection';
import CardHorizontal from '../components/CardHorizontal';
import CardHorizontalReverse from '../components/CardHorizontal';
import itemSlider from "../mock/itemSlider";
import itemsCard from "../mock/itemsCard.json";


function Inicio() {
  return (
    <Container fluid>
      <NavigationBar />
      <SliderSection items={itemSlider}
        imageSrc={itemSlider.imageSrc}
        title={itemSlider.title}
        text={itemSlider.text}
      />
      {
        itemsCard.map((items) => {
          let iteracion=1
          iteracion++
          if (iteracion%2==0){
            return (           
              <CardHorizontal 
              imageSrc={items.imageSrc}
              title={items.title}
              text={items.text}
              />   
            )
          }
          else{
            return (           
              <CardHorizontalReverse
              imageSrc={items.imageSrc}
              title={items.title}
              text={items.text}
              />
            )
          }  
        }
      )}
    </Container>
  );
}

export default Inicio;