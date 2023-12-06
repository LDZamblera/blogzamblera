import React, {Component} from 'react';
// Rutas y enlaces
import { Link } from 'react-router-dom';
import './Slider.css';

class Slider extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//     
    render(){
        // Log de seguimiento
        console.log('SliderComponent - Metodo render()');    

        return (
        <div id="slider" className={this.props.size}>
            <h1>{this.props.title}</h1>
           
        </div>
        );
    }
}

export default Slider;