import axios from 'axios';
import { URL } from "../../utils";

// Falta editar aún

export const postComentarios = async (titulo, cuerpo, usuario, id_usuario, id_articulo) => {
  try {
    const response = await axios.post(`${URL}/comentarios`, {
      titulo: titulo,
      cuerpo: cuerpo,
      id_usuario: id_usuario,
      usuario: usuario,
      id_articulo: id_articulo
    }, { withCredentials: true, crossDomain: true });

    console.log('comentario guardado:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al guardar el comentario:', error);
    throw error;
  }
};