import axios from "axios";
import { URL } from "../../utils"

export const getComentariosByArticulo = async (articuloId) => {
  try {
    const respuesta = await axios.get(
      `${URL}/comentarios/${articuloId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener la consulta", error);
    throw error;
  }
};

