
export const obtIdDesdePath = () => {
    const rutaCompleta = window.location.pathname;
    const array = rutaCompleta.split('/'); // Divide la cadena en partes usando '/' como separador
    const id = array[array.length - 1]; // Obtiene el último elemento, que debería ser el :id
    return id;
  };

export const URL = "http://localhost:3500/api/v1";

export const UrlFront = "http://localhost:3000";

export const funcionalidades = [ "articulos", "comentarios", "usuarios", "proyectos" ];