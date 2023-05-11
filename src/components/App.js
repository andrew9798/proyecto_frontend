import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "../pages/Inicio"
import Proyectos from "../pages/Proyectos"
import ContactoPage from "../pages/ContactoPage"
import Articulos from "../pages/Articulos"
import NotFound from "../pages/404"

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route exact path="/proyectos" element={<Proyectos />} />
            <Route exact path="/contacto" element={<ContactoPage />} />
            <Route exact path="/articulos" element={<Articulos />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default App