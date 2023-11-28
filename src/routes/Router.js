import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import Error from '../components/shared/error/Error';
import Home from '../components/inicio/Home';
import Blog from '../components/blog/Blog';
import Buscador from '../components/buscador/Buscador';
import Articulo from '../components/articulo/Articulo';
import CrearArticulo from '../components/acciones/crear/crearArticulo';
import EditarArticulo from '../components/acciones/editar/editarArticulo';
import About  from '../components/About/About';
import Contact from "../components/Contact/Contact"
import SocialBar from '../components/SocialBar/SocialBar';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/inicio" element={<Home />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/acerca-de" element={<About />} />
                    <Route exact path="/contactanos" element={<Contact />} />

                    <Route exact path="/blog/articulo/:id" element={<Articulo />} />
                    <Route exact path="/blog/crear" element={<CrearArticulo />} />
                    <Route exact path="/blog/editar/:id" element={<EditarArticulo />} />
                    <Route exact path="/blog/busqueda/:buscar" element={<Buscador />} />
                    <Route exact path='/contactanos' element={<SocialBar />} />
                    <Route
                        exact
                        path="/Navigate/:buscar"
                        element={
                            <Navigate
                                replace
                                to={(params) => `/blog/busqueda/${params.buscar}`}
                            />
                        }
                    />
                    <Route path="*" element={<Error />} />
                    
                </Routes>
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;
