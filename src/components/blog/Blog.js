import React, {Component} from 'react';
// Componentes
import Slider from "../shared/slider/Slider";
import Sidebar from "../shared/sidebar/Sidebar";


class Blog extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//     
    render(){
        // Log de seguimiento
        console.log('BlogComponent - Metodo render()');

        return (
            <div id="blog">
                {/* Slider - Titulo */}
                
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos - APIRest */}
                         
                    </div>
                    <Sidebar blog="true" />
                </div>

            </div>
        );
    }
}

export default Blog;