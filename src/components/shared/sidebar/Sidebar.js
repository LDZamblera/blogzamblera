import React, {Component} from 'react';

import {Navigate} from 'react-router-dom';
import WeatherPanel from "../../WeatherPanel/WeatherPanel"
import CardClima from "../../CardClima/CardClima"
import FormClima from "../../FormClima/FormClima"
import NavBarClima from "../../NavBarClima/NavBarClima"

class Sidebar extends Component{

    // Variables
    buscarRef = React.createRef();
    state = {
        buscar: "",
        Navigate: false
    };

    //----------------------------------------------------------------------//
    // Metodo NavigateBusqueda muestra pagina de resultados de busqueda     //
    //----------------------------------------------------------------------//
    NavigateBusqueda = (e) => {
        // Log de seguimiento
        console.log("Sidebar.js - Metodo NavigateBusqueda");

        // Cuando se lance la busqueda, no se actualiza la pagina, bloquea la recarga 
        e.preventDefault();

        this.setState({
            buscar: this.buscarRef.current.value,
            Navigate: true
        });

    }; 

    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//    
    render(){
        // Log de seguimiento
        console.log('SidebarComponent - Metodo render()');

        if(this.state.Navigate){
            return (
                <Navigate to={'/Navigate/' + this.state.buscar} />
            );
        }

        return (
        <aside id="sidebar">
            {/* Condicional */}
            {/*this.props.blog === 'true' &&

                *<div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <Link to={'/blog/crear'} className="btn btn-success">Crear Articulo</Link>
                </div>*/
            }

            <div id="search-blog" className="sidebar-item">
                <p><strong>Encuentra lo que buscas</strong></p>
                <br></br>
                <form onSubmit={this.NavigateBusqueda}>
                    <input type="text" nombre="search" ref={this.buscarRef} />
                    <input className="btn-buscar" type="submit" nombre="enviar" value="Buscar" />
                </form>
            
                
            </div>
            <br></br>
            <br></br>

            <CardClima/>
            <br></br>
            <WeatherPanel/>
            <br></br>
            <NavBarClima/>
            <br></br>
          
           

        </aside>
        );
    }
}

export default Sidebar;