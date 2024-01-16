import axios from "axios";
import { URL } from "../../utils"

export const getArticulos = async () => {
  try {
    const peticion = await axios.get(
      `${URL}/articulos`,
      { withCredentials: true, mode: "cors" }
    );
    return peticion.data;
  } catch (error) {
    console.error("Error al obtener los datos de la API", error);
    throw error;
  }
};
