import React, { useState, useEffect } from 'react';
import {  Button, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { getArticulo } from '../assets/js/axios/articulos/getArticulo';
import { editArticulo} from "../assets/js/axios/articulos/editArticulo";
import { obtIdDesdePath } from '../assets/js/utils';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


const EditArticulo = () => {
  const [titulo, setTitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');
  const [imagen, setImagen] = useState('');
  const [id_usuario, setIdUsuario] = useState('');

  const path = window.location.pathname;
  const Id = obtIdDesdePath(path);
  const navigate = useNavigate(); // Importa useNavigate directamente desde 'react-router-dom'

  useEffect(() => {
    const fetchArticulo = async () => {
      try {
        const articulo = await getArticulo(Id); // Utiliza la función para obtener los detalles del artículo
        setTitulo(articulo.titulo);
        setCuerpo(articulo.cuerpo);
        setImagen(articulo.imagen);
        setIdUsuario(articulo.id_usuario);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchArticulo();
  }, [Id]);

  const handleGuardarClick = async () => {
    try {
      await editArticulo(titulo, cuerpo, imagen, id_usuario, Id); // Utiliza la función de edición y pasa el ID
      console.log('Artículo guardado con éxito');
            // Redirigir después de editar
            navigate('/administracionPanel/articulos');
    } catch (error) {
      console.error('Error al guardar el artículo:', error);
    }
  };

  return (
    <Container fluid>
      <NavigationBar />
      <div className='formulario'>
      <h2>Editar el Artículo</h2>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="cuerpo" className="form-label">Cuerpo</label>
        <textarea className="form-control" id="cuerpo" rows="3" value={cuerpo} onChange={(e) => setCuerpo(e.target.value)}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="imagen" className="form-label">URL de la Imagen</label>
        <input type="text" className="form-control" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="id_usuario" className="form-label">ID Usuario</label>
        <input type="text" className="form-control" id="id_usuario" value={id_usuario} onChange={(e) => setIdUsuario(e.target.value)} />
      </div>
      <div>
        <Button variant="warning custom-link-button boton" onClick={handleGuardarClick}>
              <Link to={`/administracionPanel/articulos`}>Eliminar Articulo</Link>
        </Button>
        <Button variant="primary" className="custom-link-button boton"> <Link to={`/administracionPanel/articulos`}>volver</Link></Button>
      </div>

    </div>
    <Footer />
    </Container>
  
  );
};

export default EditArticulo;