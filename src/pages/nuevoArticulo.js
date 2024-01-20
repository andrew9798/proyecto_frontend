import React from 'react';
import { postArticulo } from '../assets/js/axios/articulos/postArticulo';
import GenericForm from '../components/GenericPost';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const NuevoArticulo = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const fields = [
    { name: 'titulo', label: 'Título' },
    { name: 'cuerpo', label: 'Cuerpo', type: 'textarea' },
    { name: 'imagen', label: 'URL de la Imagen' },
    { name: 'id_usuario', label: 'ID Usuario' },
  ];

  const handleArticuloSubmit = async (data) => {
    try {
      await postArticulo(data.titulo, data.cuerpo, data.imagen, data.id_usuario);
      console.log('Artículo guardado con éxito');
      navigate('/articulos'); // Redirige a la página de /articulos
    } catch (error) {
      console.error('Error al guardar el artículo:', error);
    }
  };

  return <GenericForm fields={fields} onSubmit={handleArticuloSubmit} />;
};

export default NuevoArticulo;