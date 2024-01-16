import axios from "axios";

export const deleteUsuario = async (usuarioId) => {
  try {
    const respuesta = await axios.delete(
      `http://localhost:3500/api/v1/articulos/${usuarioId}`
    );
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar el artículo", error);
    throw error;
  }
};