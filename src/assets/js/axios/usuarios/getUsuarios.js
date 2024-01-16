import axios from "axios";

export const getComentarios = async () => {
  try {
    const peticion = await axios.get(
      "http://localhost:3500/api/v1/usuarios",
      { withCredentials: true, mode: "cors" }
    );
    return peticion.data;
  } catch (error) {
    console.error("Error al obtener los datos de la API", error);
    throw error;
  }
};