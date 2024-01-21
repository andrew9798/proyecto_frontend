import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "../pages/Inicio"
import Proyectos from "../pages/Proyectos"
import ContactoPage from "../pages/ContactoPage"
import ArticulosPage from "../pages/ArticulosPage"
import NotFound from "../pages/404"
import ArticuloPage from '../pages/ArticuloPage'
import NuevoArticulo from "../pages/NuevoArticulo"
import NuevoComentario from '../pages/NuevoComentario'
import Comentarios from "../pages/ComentariosPage"
import AdministracionPanel from "../pages/AdministracionPanel"
import AdministracionPage from "../pages/AdministracionPage"
import LoginPage from '../pages/loginPage'
import EditArticulo from "../pages/EditArticulo"
import EditComentario from '../pages/EditComentario'
import EditUsuario from '../pages/EditUsuario'
import RegistroPage from '../pages/RegistroPage'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/proyectos" element={<Proyectos />} />
            <Route exact path="/contacto" element={<ContactoPage />} />
            <Route exact path="/articulos" element={<ArticulosPage />} />
            <Route exact path="/nuevoArticulo" element={<NuevoArticulo />} />
            <Route exact path="/nuevoComentario" element={<NuevoComentario />} />
            <Route exact path="/editArticulo/:id" element={<EditArticulo />} />
            <Route exact path="/articulos/:id" element={<ArticuloPage />} />
            <Route exact path="/comentarios" element={<Comentarios />} />
            <Route exact path="/editComentario/:id" element={<EditComentario />} />
            <Route exact path="/editUsuario/:id" element={<EditUsuario />} />
            <Route exact path="/administracionPanel" element={<AdministracionPanel />} />
            <Route exact path="/administracionPanel/articulos" element={<AdministracionPage />} />
            <Route exact path="/administracionPanel/comentarios" element={<AdministracionPage />} /> 
            <Route exact path="/administracionPanel/usuarios" element={<AdministracionPage />} />   
            <Route exact path="/registro" element={<RegistroPage />} />         
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
)

export default App