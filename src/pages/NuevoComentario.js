import React from 'react';
import { postComentarios } from '../assets/js/axios/comentarios/postComentario';
import GenericForm from '../components/GenericPost';
import { useParams, useNavigate } from 'react-router-dom';

const NuevoComentario = ( id) => {
  console.log(id)


  const fields = [
    { name: 'titulo', label: 'Titulo' },
    { name: 'cuerpo', label: 'Cuerpo', type: 'textarea' },
    { name: 'usuario', label: 'Usuario' }, 
    { name: 'id_usuario', label: 'IdUsuario' }, 
  ];

  const handleComentarioSubmit = async (data) => {
    try {
      await postComentarios(data.titulo, data.cuerpo, data.usuario, data.id_usuario, id.id);    
    } catch (error) {
      console.error('Error al guardar el comentario:', error);
    }
  };

  return <GenericForm className="comentario" fields={fields} onSubmit={handleComentarioSubmit} />;
};

export default NuevoComentario;