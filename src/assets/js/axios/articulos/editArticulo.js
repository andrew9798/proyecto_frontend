import axios from 'axios';
import { URL } from "../../utils"

export const editArticulo = async (titulo, cuerpo, imagen, id_usuario, articuloId) => {
  try {
    const response = await axios.patch(`${URL}/articulos/${articuloId}`, {
      titulo: titulo,
      cuerpo: cuerpo,
      id_usuario: id_usuario,
      imagen: imagen
    });

    console.log('Artículo editado:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al guardar el artículo:', error);
    throw error;
  }
};