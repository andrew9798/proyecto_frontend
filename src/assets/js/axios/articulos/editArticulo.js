import axios from 'axios';
import { URL } from "../../utils"

export const postArticulo = async (titulo, cuerpo, imagen, id_usuario, articuloId) => {
  try {
    const response = await axios.patch(`${URL}${articuloId}`, {
      titulo: titulo,
      cuerpo: cuerpo,
      id_usuario: id_usuario,
      imagen: imagen
    });

    console.log('Artículo guardado:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al guardar el artículo:', error);
    throw error;
  }
};