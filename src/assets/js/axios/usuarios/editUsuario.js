import axios from 'axios';
import { URL } from "../../utils"

export const editUsuario = async (usuario, correo, contrasenya, id_profile, idUsuario) => {
    try {
      const response = await axios.patch(`${URL}/usuarios/${idUsuario}`, {
        usuario: usuario,
        correo: correo,
        contrasenya: contrasenya,
        id_profile: id_profile
      });
  
      console.log('usuario editado:', response.data);
  
      return response.data;
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      throw error;
    }
  };