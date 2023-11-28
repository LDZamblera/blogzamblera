import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Global from "../../../api/Global";
import './crearArticulo.css';



class CrearArticulo extends Component {
  url = Global.url;
  tituloRef = React.createRef();
  contenidoRef = React.createRef();
  imagenRef = React.createRef(); 
  autorRef = React.createRef(); 
  categoriaRef = React.createRef();// Nueva referencia para el autor
  // Referencia al campo de la imagen
  state = {
    articulo: {
      titulo: "",
      contenido: "",
      fecha: new Date(),
      imagen: null,
      autor: "", 
      categoria: "tecnología",// Nuevo estado para el autor // Estado para guardar la imagen seleccionada
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
        autor: this.autorRef.current.value ,
        categoria: this.categoriaRef.current.value,// Capturar la imagen seleccionada
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
    formData.append("imagen", this.state.articulo.imagen); // Agregar la imagen al FormData
    formData.append("autor", this.state.articulo.autor); // Agregar autor al FormData
    formData.append("categoria", this.state.articulo.categoria); // Agregar categoría al FormDa
    axios
      .post(`${this.url}/articulos.json`, formData)
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
              <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  name="titulo"
                  ref={this.tituloRef}
                  onChange={this.cambiarState}
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <select
                  name="categoria"
                  ref={this.categoriaRef}
                  onChange={this.cambiarState}
                >
                  <option value="tecnología">Tecnología</option>
                  <option value="viajes">Viajes</option>
                  <option value="moda">Moda</option>
                  <option value="deportes">Deportes</option>
                  {/* ... otras opciones de categorías */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="autor">Autor</label>
                <input
                  type="text"
                  name="autor"
                  ref={this.autorRef}
                  onChange={this.cambiarState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contenido">Contenido</label>
                <textarea
                  name="contenido"
                  ref={this.contenidoRef}
                  onChange={this.cambiarState}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="imagen">Imagen</label>
                <input
                  type="file"
                  name="imagen"
                  accept="image/*"
                  ref={this.imagenRef}
                  onChange={this.cambiarState}
                />
                {/* Vista previa de la imagen */}
                {this.state.articulo.imagen && (
                  <img
                    src={URL.createObjectURL(this.state.articulo.imagen)}
                    alt="Vista previa"
                    className="preview-image"
                  />
                )}
              </div>

              {/* Campo para autor */}
             

              {/* Campo para categoría */}
              

              <div className="clearfix"></div>
              <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CrearArticulo;