import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";


class CrearArticulo extends Component {
  url = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor backend
  tituloRef = React.createRef();
  contenidoRef = React.createRef();
  imagenRef = React.createRef(); 
  autorRef = React.createRef(); 
  categoriaRef = React.createRef();

  state = {
    articulo: {
      titulo: "",
      contenido: "",
      fecha: new Date(),
      imagen: null,
      autor: "", 
      categoria: "tecnología",
    },
    status: null,
  };

  cambiarState = () => {
    this.setState({
      articulo: {
        titulo: this.tituloRef.current.value,
        contenido: this.contenidoRef.current.value,
        fecha: new Date(),
        imagen: this.imagenRef.current.files[0],
        autor: this.autorRef.current.value,
        categoria: this.categoriaRef.current.value,
      },
    });
  };

  guardarArticulo = (e) => {
    e.preventDefault();
    this.cambiarState();

    const formData = new FormData();
    formData.append("titulo", this.state.articulo.titulo);
    formData.append("contenido", this.state.articulo.contenido);
    formData.append("fecha", this.state.articulo.fecha);
    formData.append("imagen", this.state.articulo.imagen);
    formData.append("autor", this.state.articulo.autor);
    formData.append("categoria", this.state.articulo.categoria);

    axios
      .post(`${this.url}/new-article`, formData) // Reemplaza 'new-article' con la ruta correspondiente
      .then((res) => {
        if (res.data) {
          this.setState({
            articulo: res.data,
            status: "success",
          });
          swal("Articulo Creado", "El articulo ha sido creado correctamente.", "success");
        } else {
          this.setState({
            status: null,
          });
          swal("Error", "Error al crear el articulo.", "error");
        }
      });
  };

  render() {
    if (this.state.status === "success") {
      return <Navigate to={"/blog"} />;
    }

    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <br></br>
            <h1 className="sub-header">Crear Articulo</h1>
            <br></br>
            <form className="middle-form" onSubmit={this.guardarArticulo}>
              {/* Resto del formulario es igual */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CrearArticulo;
