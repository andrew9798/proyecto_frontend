
export const obtIdDesdePath = () => {
    const rutaCompleta = window.location.pathname;
    const array = rutaCompleta.split('/'); // Divide la cadena en partes usando '/' como separador
    const id = array[array.length - 1]; // Obtiene el último elemento, que debería ser el :id
    return id;
  };

export const URL = "https://localhost:3000/api/v1";