// import React, { useState } from "react";

// const LoginComponent = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await fetch("/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username, password })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Guarda el token en el estado global o en el contexto de la aplicación
//         console.log("Token:", data.token);
//       } else {
//         console.error("Error en el inicio de sesión");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Iniciar Sesión</button>
//     </div>
//   );


// };

// export default LoginComponente
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "../assets/css/formulario.css";
import {URL} from "../assets/js/utils"

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    setUsername(usernameValue);

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/.test(usernameValue)
    ) {
      setUsernameError(
        "El nombre de usuario debe contener al menos una letra mayúscula, una letra minúscula y un número, y tener una longitud mínima de 8 y máxima de 16 caracteres"
      );
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Puedes agregar aquí la validación de la contraseña si es necesario

    if (!passwordValue) {
      setPasswordError("La contraseña es requerida");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validar que no haya errores
    if (usernameError || passwordError) {
      return;
    }

    try {
      const response = await axios.post(`${URL}/login`, {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Esto habilita el manejo de cookies y permite CORS con credenciales
      });

      if (response.ok) {
        const data = await response.json();
        // Guarda el token en el estado global o en el contexto de la aplicación
        console.log("Token:", data.token);
      } else {
        console.error("Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form className="formulario" onSubmit={handleLogin}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label className="campoFormulario">Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
          isInvalid={usernameError}
        />
        <Form.Control.Feedback type="invalid">
          {usernameError}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="campoFormulario">Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={passwordError}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="boton" variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  );
};

export default LoginComponent;