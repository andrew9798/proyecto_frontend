import React from "react";
import { Carousel, Button } from "react-bootstrap";

const SliderSection = ({ items }) => {
  return (
    <Carousel className="bg-dark full-screen-slider">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 h-100 slider-image"
            src={item.imageSrc}
            alt={item.title}
          />
          <div className="slider-overlay"></div>
          <Carousel.Caption className="carouselTexto">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Button variant="light">Saber más</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderSection;