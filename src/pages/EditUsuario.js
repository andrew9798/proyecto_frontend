import React, { useState, useEffect } from 'react';
import { editUsuario } from '../assets/js/axios/usuarios/editUsuario';
import { getUsuario } from '../assets/js/axios/usuarios/getUsuario';
import { obtIdDesdePath } from '../assets/js/utils';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const EditUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasenya, setContrasenya] = useState('');
  const [correo, setCorreo] = useState('');
  const [id_profile, setIdProfile] = useState('');

  const path = window.location.pathname;
  const Id = obtIdDesdePath(path);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const usuarioData = await getUsuario(Id);
        setUsuario(usuarioData.usuario);
        setContrasenya(usuarioData.contrasenya);
        setCorreo(usuarioData.correo);
        setIdProfile(usuarioData.id_profile);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUsuario();
  }, [Id]);

  const handleGuardarClick = async () => {
    try {
      await editUsuario(usuario, correo, contrasenya, id_profile, Id);
      console.log('Usuario guardado con éxito');
      navigate('/administracionPanel/usuarios');
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  };

  return (
    <Container fluid>
        <NavigationBar />
        <div className='formulario'>
      <h2>Editar el usuario</h2>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">Usuario</label>
        <input type="text" className="form-control" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="contrasenya" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="contrasenya" value={contrasenya} onChange={(e) => setContrasenya(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input type="email" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="id_profile" className="form-label">ID Perfil</label>
        <input type="text" className="form-control" id="id_profile" value={id_profile} onChange={(e) => setIdProfile(e.target.value)} />
      </div>
      <Button variant="warning custom-link-button boton" onClick={handleGuardarClick}>
              <Link to={`/administracionPanel/usuario`}>Editar Usuario</Link>
        </Button>
        <Button variant="primary" className="custom-link-button boton"> <Link to={`/administracionPanel/usuarios`}>volver</Link></Button>
    </div>
    <Footer />
    </Container>
  );
};

export default EditUsuario;