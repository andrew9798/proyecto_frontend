import axios from "axios"

const getArticulos = async () => {

        const peticion = await axios.get("http://localhost:3500/api/v1/articulos",{ withCredentials: true, mode: "cors" });
        console.log(peticion);  
}

export default getArticulos;