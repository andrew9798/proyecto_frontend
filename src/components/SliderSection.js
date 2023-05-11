import React from "react";
import { Carousel } from "react-bootstrap";



const SliderSection = ({ items }) => {
  return (
    <Carousel className="bg-dark">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.imageSrc}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};



export default SliderSection;