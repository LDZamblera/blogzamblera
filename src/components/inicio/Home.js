import React, {Component} from 'react';
// Componentes
import Slider from "../shared/slider/Slider";
import Sidebar from "../shared/sidebar/Sidebar";
import './Home.css';

class Home extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//     
    render(){
        // Log de seguimiento
        console.log('HomeComponent - Metodo render()');

        return (
            <div id="home">
                {/* Slider - Titulo */}
                <Slider title="Blog en React.js" btn="Ir al Blog" size="slider-big" />
                <div className="center">
                    <div id="content">
                        <br></br>
                        <h1 className="sub-header"> Ultimos Articulos </h1>
                        
                    </div>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Home;