import axios from "axios";
import { URL } from "../../utils"

export const getUsuarios = async () => {
  try {
    const peticion = await axios.get(
      `${URL}/usuarios`,
      { withCredentials: true, mode: "cors" }
    );
    return peticion.data;
  } catch (error) {
    console.error("Error al obtener los datos de la API", error);
    throw error;
  }
};