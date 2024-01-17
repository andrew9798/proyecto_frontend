// import { useHistory } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
// import { Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { getArticulos } from "../assets/js/axios/articulos/getArticulos";
// import { getComentarios } from "../assets/js/axios/comentarios/getComentarios";
// import { getUsuarios } from "../assets/js/axios/usuarios/getUsuarios";
// import CardHorizontal from "../components/CardHorizontal";
// import CardUsuario from "../components/CardUsuario";
// import NavigationBar from "../components/NavigationBar";
// import Footer from "../components/Footer";
// import { obtIdDesdePath } from "../assets/js/utils";
// import { funcionalidades } from "../assets/js/utils";

// var path = window.location.pathname;
// var queAdministrar = obtIdDesdePath(path);
// console.log(queAdministrar)


// const Inicio = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let data;
//         switch (queAdministrar) {
//           case "articulos":
//               path = window.location.pathname;
//               queAdministrar = obtIdDesdePath(path);
//             data = await getArticulos();
//             break;
//           case "comentarios":
//             path = window.location.pathname;
//             queAdministrar = obtIdDesdePath(path);
//             data = await getComentarios();
//             break;
//             case "usuarios":
//               path = window.location.pathname;
//               queAdministrar = obtIdDesdePath(path);
//               data = await getUsuarios();
//               break;
//           // Agrega más casos según sea necesario
//           default:
//             data = [];
//         }
//         setItems(data);
//       } catch (error) {
//         // Manejar el error según sea necesario
//       }
//     };

//     fetchData();
//   }, [queAdministrar]); // Hacer que useEffect se ejecute cada vez que queAdministrar cambie

//   return (
//     <Container className="container" fluid>
//       <NavigationBar />
//       {queAdministrar === "usuarios" ? (
//         items.map((date) => (
//           <CardUsuario
//             key={date._id}
//             id={date._id}
//             nombre={date.usuario}
//             correo={date.correo}
//             nivel={date.id_profile}
//           />
//         ))
//       ) : (
//         items.map((date) => (
//           <CardHorizontal
//             key={date._id}
//             id={date._id}
//             image={date.imagen}
//             title={date.titulo}
//             text={date.cuerpo}
//           />
//         ))
//       )}
//       <Button variant="primary">
//         <Link to={`/articulos/nuevoArticulo`}>Saber más</Link>
//       </Button>
//       <Button variant="primary">
//         <Link to={`/articulos/editArticulo`}>Saber más</Link>
//       </Button>
//       <Footer />
//     </Container>
//   );
// };

// export default Inicio;

import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getArticulos } from "../assets/js/axios/articulos/getArticulos";
import { getComentarios } from "../assets/js/axios/comentarios/getComentarios";
import { getUsuarios } from "../assets/js/axios/usuarios/getUsuarios";
import CardHorizontal from "../components/CardHorizontal";
import CardUsuario from "../components/CardUsuario";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { obtIdDesdePath } from "../assets/js/utils";
import { funcionalidades } from "../assets/js/utils";

const Inicio = () => {
  const { id } = useParams();
  const queAdministrar = obtIdDesdePath(id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (queAdministrar) {
          case "articulos":
            data = await getArticulos();
            break;
          case "comentarios":
            data = await getComentarios();
            break;
          case "usuarios":
            data = await getUsuarios();
            break;
          // Agrega más casos según sea necesario
          default:
            data = [];
        }
        setItems(data);
      } catch (error) {
        // Manejar el error según sea necesario
      }
    };

    fetchData();
  }, [queAdministrar]); // Hacer que useEffect se ejecute cada vez que queAdministrar cambie

  return (
    <Container className="container" fluid>
      <NavigationBar />
      {queAdministrar === "usuarios" ? (
        items.map((date) => (
          <CardUsuario
            key={date._id}
            id={date._id}
            nombre={date.usuario}
            correo={date.correo}
            nivel={date.id_profile}
          />
        ))
      ) : (
        items.map((date) => (
          <CardHorizontal
            key={date._id}
            id={date._id}
            image={date.imagen}
            title={date.titulo}
            text={date.cuerpo}
          />
        ))
      )}
      <Button variant="primary">
        <Link to={`/articulos/nuevoArticulo`}>Saber más</Link>
      </Button>
      <Button variant="primary">
        <Link to={`/articulos/editArticulo`}>Saber más</Link>
      </Button>
      <Footer />
    </Container>
  );
};

export default Inicio;