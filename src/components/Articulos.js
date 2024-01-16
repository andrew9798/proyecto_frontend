import { Card, Button } from "react-bootstrap";

function articulos({ image, title }) {
  return (
    <>
      <Card className='articulo'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Button variant="primary">Saber más</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default articulos;