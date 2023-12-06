import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from '../../shared/sidebar/Sidebar';
import { Navigate } from 'react-router-dom'; // Asegúrate de importar Navigate desde 'react-router-dom'

class EditarArticulo extends Component {
  url = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor backend
  tituloRef = React.createRef();
  contenidoRef = React.createRef();
  articuloId = null;

  state = {
    articulo: {},
    status: null,
  };

  componentDidMount() {
    this.articuloId = this.props.match.params.id;
    this.getArticulo(this.articuloId);
  }

  getArticulo = (id) => {
    axios.get(`${this.url}/articulos/${id}`)
      .then(res => {
        this.setState({
          articulo: res.data
        });
      })
      .catch(error => {
        console.error(error);
        // Manejo de errores, puedes mostrar un mensaje de error o redirigir a una página de error
      });
  };

  cambiarState = () => {
    this.setState({
      articulo: {
        titulo: this.tituloRef.current.value,
        contenido: this.contenidoRef.current.value,
        fecha: new Date()
      }
    });
  };

  GuardarArticulo = (e) => {
    e.preventDefault();
    this.cambiarState();

    axios.put(`${this.url}/articulos/${this.articuloId}`, this.state.articulo)
      .then(res => {
        if (res.data) {
          this.setState({
            articulo: res.data,
            status: 'success'
          });

          swal(
            'Articulo Modificado',
            'El articulo ha sido modificado correctamente.',
            'success'
          );
        } else {
          this.setState({
            status: null
          });

          swal(
            'Error',
            'Error al modificar el articulo.',
            'error'
          );
        }
      })
      .catch(error => {
        console.error(error);
        // Manejo de errores, puedes mostrar un mensaje de error o redirigir a una página de error
      });
  };

  render() {
    if (this.state.status === 'success') {
      return <Navigate to={`/blog/articulo/${this.articuloId}`} />;
    }

    const articuloUpdate = this.state.articulo;

    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="sub-header">Editar Articulo</h1>

            {this.state.articulo.titulo &&
              <form className="middle-form" onSubmit={this.guardarArticulo}>
                <div className="form-group">
                  <label htmlFor="titulo">Titulo</label>
                  <input type="text" name="titulo" defaultValue={articuloUpdate.titulo} ref={this.tituloRef} onChange={this.cambiarState} />
                </div>

                <div className="form-group">
                  <label htmlFor="contenido">Contenido</label>
                  <textarea name="contenido" defaultValue={articuloUpdate.contenido} ref={this.contenidoRef} onChange={this.cambiarState}></textarea>
                </div>

                <div className="clearfix"></div>
                <input type="submit" value="Guardar" className="btn btn-success" />
              </form>
            }

            {!this.state.articulo.titulo &&
              <div>
                <h1 className="sub-header">Cargando ...</h1>
                <p>Espere mientras se carga el contenido.</p>
              </div>
            }
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default EditarArticulo;
