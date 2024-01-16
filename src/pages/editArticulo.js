import React, { useState } from 'react';
import { editArticulo } from '../assets/js/axios/articulos/editArticulo'; // Importa la función desde el nuevo archivo

const ArticulosForm = () => {
  const [titulo, setTitulo] = useState('');
  const [cuerpo, setCuerpo] = useState('');
  const [id_usuario, setIdUsuario] = useState('');
  const [imagen, setImagen] = useState('');


  const handleGuardarClick = async () => {
    try {
      await editArticulo(titulo, cuerpo, imagen, id_usuario); // Utiliza la función importada
      console.log('Artículo guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el artículo:', error);
    }
  };

  return (
    <div>
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
      <button type="button" className="btn btn-primary" onClick={handleGuardarClick}>Guardar Artículo</button>
    </div>
  );
};

export default ArticulosForm;