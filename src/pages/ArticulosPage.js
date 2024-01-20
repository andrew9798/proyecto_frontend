import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { getArticulos } from '../assets/js/axios/articulos/getArticulos'; // Ruta de getArticulos
import CardHorizontal from "../components/CardHorizontal"
import CardArticulo from '../components/CardArticulo';
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer";
import '../assets/css/styles.css'

const Articulos = () => {
    const [itemsCard, setItemsCard] = useState([]);

    useEffect(() => {
        const data = async () => {
            try {
                const data = await getArticulos();
                setItemsCard(data); // Actualiza el estado con los datos de la API
                console.log(data)
            } catch (error) {
                // Manejar el error según sea necesario
            }
        };

        data(); // Llama a la función para obtener los datos al montar el componente
    }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

    return (
        <Container fluid>
            <NavigationBar />
            {itemsCard.map((date) => (
                <CardArticulo
                    id={date._id}
                    image={date.imagen}
                    title={date.titulo}
                    text={date.cuerpo}                                 
                />
            ))}

            <Footer />
        </Container>
    );
};

export default Articulos;