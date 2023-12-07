import React, {Component} from 'react';
// Logo
import logo from '../../../assets/img/Zamblera.png';
// Menu de Navegacion
import {NavLink} from 'react-router-dom';

import './Header.css'; 

class Header extends Component{
    render(){
        // Log de seguimiento
        console.log('HeaderComponent - Metodo render()');     
           
        
        return (
            <header id="header">
                <div className="center">
                    {/* Logo */}
                    <div id="logo">
                        <img src={logo} className="logo" alt="logotipo" />
                        <span id="brand">
                            <strong>Blog</strong>
                        </span>
                    </div>
                    {/* Menu */}
                    
                    <nav id="menu">
                        <ul>
                            <li><NavLink to="/inicio" activeClassName="active">Inicio</NavLink></li>
                            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                            <li><NavLink to="/acerca-de" activeClassName="active">Acerca de</NavLink></li>
                            <li><NavLink to="/contactanos" activeClassName="active">Contacto</NavLink></li>
                            <li><NavLink to="/blog/crear" activeClassName="active">Crear</NavLink></li>
                            <li><NavLink to="/blog/editar/:id" activeClassName="active">Editar/Eliminar</NavLink></li>
                            <li><NavLink to="/noticias" activeClassName="active">Estrenos</NavLink></li>
                        </ul>
                    </nav>
                    
                    {/* Limpiar Floats */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;
