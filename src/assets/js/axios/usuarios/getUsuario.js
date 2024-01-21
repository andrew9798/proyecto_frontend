import axios from "axios";
import { URL } from "../../utils"

export const getUsuario = async (usuarioId) => {
  try {
    const respuesta = await axios.get(
      `${URL}/usuarios/${usuarioId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener la consulta", error);
    throw error;
  }
};