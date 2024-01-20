import axios from "axios";
import { URL } from "../../utils"

export const getArticulo = async (articuloId) => {
  try {
    const respuesta = await axios.get(
      `${URL}/articulos/${articuloId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener la consulta", error);
    throw error;
  }
};
