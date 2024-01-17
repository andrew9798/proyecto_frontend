import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';

function NavigationBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => setShowOffcanvas(true);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" sticky-top>
        <Navbar.Brand href="#home">Mi sitio web</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto justify-content-end">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/sobre-mi">Sobre mi</Nav.Link>
            <Nav.Link href="/proyectos">Proyectos</Nav.Link>
            <Nav.Link href="/articulos">Artículos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/inicio-sesion">Iniciar Sesion</Nav.Link>
            <Nav.Link href="/administracionPanel">Panel Administrador</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={handleOffcanvasShow}>
            Mi cuenta
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi cuenta</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Nombre: John Doe</p>
          <p>Correo electrónico: john.doe@example.com</p>
          <Button variant="primary" onClick={handleOffcanvasClose}>
            Cerrar sesión
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;