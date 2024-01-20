import axios from 'axios';
import { URL } from "../../utils"

export const editComentario = async (usuario, id_usuario, id_articulo, titulo, cuerpo, comentarioId) => {
  try {
    const response = await axios.patch(`${URL}/comentarios/${comentarioId}`, {
      usuario: usuario,
      id_usuario: id_usuario,
      id_articulo: id_articulo,
      titulo: titulo,
      cuerpo: cuerpo
    });

    console.log('comentario editado:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al guardar el comentario:', error);
    throw error;
  }
};