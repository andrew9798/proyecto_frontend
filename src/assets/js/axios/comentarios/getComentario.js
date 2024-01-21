import axios from "axios";
import { URL } from "../../utils"

export const getComentario = async (comentarioId) => {
  try {
    const respuesta = await axios.get(
      `${URL}/comentarios/${comentarioId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener la consulta", error);
    throw error;
  }
};