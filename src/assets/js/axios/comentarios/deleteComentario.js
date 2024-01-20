import axios from "axios";
import { URL } from "../../utils"

export const deleteComentario = async (id) => {
  try {
    const respuesta = await axios.delete(
      `${URL}/comentarios/${id}`
      , { withCredentials: true, crossDomain: true });
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar el comentario", error);
    throw error;
  }
};