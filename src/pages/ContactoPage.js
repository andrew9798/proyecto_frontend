import React from "react";
import { Container } from "react-bootstrap";
import Formulario from "../components/Formulario";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Contacto = () => (

    <Container fluid>
        <NavigationBar />
        <Formulario />
        <Footer />
    </Container>
)

export default Contacto;