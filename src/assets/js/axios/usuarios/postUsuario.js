import axios from 'axios';
import { URL } from "../../utils";

// Falta editar aún

export const postUsuarios = async (usuario, correo, contrasenya, id_profile) => {
  try {
    const response = await axios.post(`${URL}/usuarios`, {
      usuario: usuario,
      correo: correo,
      contrasenya: contrasenya,
      id_profile: id_profile
    }, { withCredentials: true, crossDomain: true });

    console.log('usuario guardado:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    throw error;
  }
};