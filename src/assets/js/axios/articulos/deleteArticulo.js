import axios from "axios";
import { URL } from "../../utils"

export const deleteArticulo = async (articuloId) => {
  try {
    const respuesta = await axios.delete(
      `${URL}/articulos/${articuloId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar el artículo", error);
    throw error;
  }
};