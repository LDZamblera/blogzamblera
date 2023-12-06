import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import './crearArticulo.css';

class CrearArticulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulo: {
        titulo: "",
        contenido: "",
        imagen: null,
        autor: "",
        categoria: "tecnología",
      },
      status: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      articulo: {
        ...prevState.articulo,
        [name]: value,
      },
    }));
  };

  handleFileChange = (e) => {
    this.setState({
      articulo: {
        ...this.state.articulo,
        imagen: e.target.files[0],
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { titulo, contenido, imagen, autor, categoria } = this.state.articulo;

    // Verificar que los campos requeridos no estén vacíos antes de enviar la solicitud
    if (
      !titulo.trim() ||
      !contenido.trim() ||
      !autor.trim() ||
      !categoria.trim()
    ) {
      swal("Error", "Por favor completa todos los campos obligatorios.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("contenido", contenido);
    formData.append("imagen", imagen);
    formData.append("autor", autor);
    formData.append("categoria", categoria);

    axios
      .post("http://localhost:3000/new-article", formData)
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
      })
      .catch((error) => {
        console.error(error);
        swal("Error", "Error al crear el articulo.", "error");
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
            <br />
            <h1 className="sub-header">Crear Articulo</h1>
            <br />
            <form className="middle-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="titulo">Titulo</label>
                <input
                  type="text"
                  name="titulo"
                  value={this.state.articulo.titulo}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <select
                  name="categoria"
                  value={this.state.articulo.categoria}
                  onChange={this.handleChange}
                >
                  <option value="tecnología">Tecnología</option>
                  <option value="viajes">Viajes</option>
                  <option value="moda">Moda</option>
                  <option value="deportes">Deportes</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="autor">Autor</label>
                <input
                  type="text"
                  name="autor"
                  value={this.state.articulo.autor}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contenido">Contenido</label>
                <textarea
                  name="contenido"
                  value={this.state.articulo.contenido}
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="imagen">Imagen</label>
                <input
                  type="file"
                  name="imagen"
                  accept="image/*"
                  onChange={this.handleFileChange}
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
