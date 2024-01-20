import axios from "axios";
import { URL } from "../../utils"

export const deleteUsuario = async (id) => {
  try {
    const respuesta = await axios.delete(
      `${URL}/usuarios/${id}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar el usuario", error);
    throw error;
  }
};