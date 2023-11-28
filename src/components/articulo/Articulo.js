import React, { Component } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import swal from 'sweetalert';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../../api/Global';
import Sidebar from '../shared/sidebar/Sidebar';
import imagen from '../../assets/img/paisaje.jpg';
import noImagen from '../../assets/img/noimage.png';

class Articulo extends Component {
    url = Global.url;
    state = {
        articulo: null,
        status: null
    }

    componentDidMount() {
        console.log("Articulo.js - Método componentDidMount"); 
        this.getArticulo();
    }

    getArticulo = () => {
        console.log("Articulo.js - Método getArticulo");
        if (this.props.match && this.props.match.params) {
            var id = this.props.match.params.id;
            axios.get(`${this.url}/articulos/${id}.json`)
                .then(res => {
                    this.setState({
                        articulo: res.data,
                        status: 'success'
                    });
                })
                .catch(error => {
                    this.setState({
                        status: 'error'
                    });
                });
        } else {
            console.error('No se pudo obtener el ID del artículo.');
            this.setState({
                status: 'error'
            });
        }
    };
    

    eliminarArticulo = () => {
        // Log de seguimiento
        console.log("Articulo.js - Método eliminarArticulo");

        // Popup de confirmación
        swal({
            title: "¿Estás seguro?",
            text: "Una vez eliminado, no podrás recuperar este archivo.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                var id = this.props.match.params.id;
                axios.delete(`${this.url}/articulos/${id}.json`)
                .then(res => {
                    this.setState({
                        articulo: res.data,
                        status: 'delete'
                    });
                });
            } else {
                swal("Tu archivo está seguro.");
            }
        });
    };

    render(){
        console.log('Articulo - Método render()');

        if(this.state.status === 'delete'){
            return <Navigate to={'/blog'}  />;
        }

        const { articulo } = this.state;
        return (
            <div className="center">
                <section id="content">
                    {articulo ? (
                        <div id="articles">
                            <article className="article-item detail">
                                <div className="image-wrap">
                                    {articulo.imagen !== null ? (
                                        <img src={imagen} alt={articulo.titulo} className="img-detalle-articulo center" />
                                    ) : (
                                        <img src={noImagen} alt={articulo.titulo} title={articulo.titulo} />
                                    )}
                                </div>
                                <h1 className="sub-header">
                                    {articulo.titulo}
                                    <Link to={'/inicio'} className="btn-azul right">Volver</Link>    
                                </h1>
                                <span className="date">
                                    <Moment locale='es' fromNow>
                                        {articulo.fecha}
                                    </Moment>
                                </span>
                                <p>{articulo.contenido}</p>
                                <div className="clearfix"></div>
                            </article>
                        </div>
                    ) : (
                        <div id="articles">
                            <h2 className="sub-header">El artículo no existe.</h2>
                            <p>Inténtalo más tarde.</p>
                        </div>
                    )}
                </section>

                <Sidebar />
                <div className="clearfix"></div>
            </div>
        );
    }
}

export default Articulo;
