import React from "react";
import { Carousel, Button } from "react-bootstrap";

const SliderSection = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.imageSrc}
            alt={`Slide ${index + 1}`}
          />
          <div className="slider-overlay"></div>
          <Carousel.Caption className="text-center">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderSection;