import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import { editComentario } from '../assets/js/axios/comentarios/editComentario';
import { getComentario } from '../assets/js/axios/comentarios/getComentario';
import { obtIdDesdePath } from '../assets/js/utils';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EditComentario = () => {
  const [usuario, setUsuario] = useState('');
  const [id_articulo, setArticulo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');
  const [id_usuario, setIdUsuario] = useState('');

  const path = window.location.pathname;
  const Id = obtIdDesdePath(path);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComentario = async () => {
      try {
        const comentario = await getComentario(Id);
        setTitulo(comentario.titulo);
        setCuerpo(comentario.cuerpo);
        setUsuario(comentario.usuario);
        setIdUsuario(comentario.id_usuario);
        setArticulo(comentario.id_articulo);
      } catch (error) {
        console.error('Error al obtener el comentario:', error);
      }
    };

    fetchComentario();
  }, [Id]);

  const handleGuardarClick = async () => {
    try {
      await editComentario(usuario, id_usuario, id_articulo, titulo, cuerpo, Id);
      console.log('Comentario guardado con éxito');
      // Redirigir después de editar
      navigate('/administracionPanel/comentarios');
    } catch (error) {
      console.error('Error al guardar el comentario:', error);
    }
  };

  return (
    <Container fluid>
     <NavigationBar />
     <div className='formulario'>
      <h2>Editar el comentario</h2>
      <div className="mb-3">
        <label htmlFor="titulo" className="form-label">Título</label>
        <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="cuerpo" className="form-label">Cuerpo</label>
        <textarea className="form-control" id="cuerpo" rows="3" value={cuerpo} onChange={(e) => setCuerpo(e.target.value)}></textarea>
      </div>
      <Button variant="warning custom-link-button boton" onClick={handleGuardarClick}>
              <Link to={`/administracionPanel/comentarios`}>Eliminar Comentario</Link>
        </Button>
        <Button variant="primary" className="custom-link-button boton"> <Link to={`/administracionPanel/comentarios`}>volver</Link></Button>
    </div>
    <Footer />
    </Container>

  );
};

export default EditComentario;