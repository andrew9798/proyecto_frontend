import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/css/formulario.css"

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/.test(nameValue)
    ) {
      setNameError(
        "El nombre debe contener al menos una letra mayúscula, una letra minúscula y un número y tener una longitud mínima de 8 y máxima de 16 caracteres"
      );
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
      setEmailError("Por favor, ingrese un correo electrónico válido");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya errores
    if (nameError || emailError) {
      return;
    }
    
    console.log(name);
    console.log(email);
    console.log( message);
  };

  return (
    <Form className="formulario" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label className="campoFormulario">Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          value={name}
          onChange={handleNameChange}
          isInvalid={nameError}
        />
        <Form.Control.Feedback type="invalid">
          {nameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label className="campoFormulario">Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChange={handleEmailChange}
          isInvalid={emailError}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicMessage">
        <Form.Label className="campoFormulario">Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Ingrese su mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button className="boton" variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;


