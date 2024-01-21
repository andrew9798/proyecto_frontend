import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import "../assets/css/formulario.css";
import { postUsuarios } from "../assets/js/axios/usuarios/postUsuario"; // Importa la función desde el nuevo archivo
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProfilePorDefecto = 2   //Por defecto el usuario tendrá el perfil de usuario.

const RegistroPage = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasenya, setContrasenya] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuarioError, setUsuarioError] = useState("");
  const [contrasenyaError, setContrasenyaError] = useState("");
  const [correoError, setCorreoError] = useState("");

  const handleUsuarioChange = (e) => {
    const usuarioValue = e.target.value;
    setUsuario(usuarioValue);

    // Puedes agregar aquí la validación del usuario si es necesario

    if (!usuarioValue) {
      setUsuarioError("El nombre de usuario es requerido");
    } else {
      setUsuarioError("");
    }
  };

  const handleContrasenyaChange = (e) => {
    const contrasenyaValue = e.target.value;
    setContrasenya(contrasenyaValue);

    // Puedes agregar aquí la validación de la contraseña si es necesario

    if (!contrasenyaValue) {
      setContrasenyaError("La contraseña es requerida");
    } else {
      setContrasenyaError("");
    }
  };

  const handleCorreoChange = (e) => {
    const correoValue = e.target.value;
    setCorreo(correoValue);

    // Puedes agregar aquí la validación del correo si es necesario

    if (!correoValue) {
      setCorreoError("El correo es requerido");
    } else {
      setCorreoError("");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();

    // Validar que no haya errores
    if (usuarioError || contrasenyaError || correoError ) {
      return;
    }

    try {
      await postUsuarios(usuario, correo, contrasenya, ProfilePorDefecto); // Utiliza la función importada
      console.log("Usuario creado con éxito");

      // Redirección después de que el usuario se haya creado con éxito
      // Puedes ajustar la ruta de redirección según tus necesidades
      window.location.href = "/";
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };

  return (
    <Container fluid>
      <NavigationBar />
      <Form className="formulario" onSubmit={handleRegistro}>
      <Form.Group controlId="formBasicUsuario">
        <Form.Label className="campoFormulario">Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre de usuario"
          value={usuario}
          onChange={handleUsuarioChange}
          isInvalid={usuarioError}
        />
        <Form.Control.Feedback type="invalid">
          {usuarioError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicContrasenya">
        <Form.Label className="campoFormulario">Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          value={contrasenya}
          onChange={handleContrasenyaChange}
          isInvalid={contrasenyaError}
        />
        <Form.Control.Feedback type="invalid">
          {contrasenyaError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicCorreo">
        <Form.Label className="campoFormulario">Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
          value={correo}
          onChange={handleCorreoChange}
          isInvalid={correoError}
        />
        <Form.Control.Feedback type="invalid">
          {correoError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="boton" variant="primary" type="submit">
        Inscribirse
      </Button>
    </Form>
    <Footer />
    </Container> 
  );
};

export default RegistroPage;