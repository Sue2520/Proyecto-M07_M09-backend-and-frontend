import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCurso() {
  let navigate = useNavigate();

  const [curso, setCurso] = useState({
    nombre_curso: "",
    fecha_inicio: "",
    fecha_final: "",
    descripcion: ""
  });

  const { nombre_curso, fecha_inicio, fecha_final, descripcion } = curso;

  const onInputChange = (e) => {
    setCurso({ ...curso, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/curso", curso);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Curso</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="nombre_curso" className="form-label">
                Nombre del Curso
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your curso"
                name="nombre_curso"
                value={nombre_curso}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_inicio" className="form-label">
                Fecha de Inicio
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter you fecha de inicio"
                name="fecha_inicio"
                value={fecha_inicio}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_final" className="form-label">
                Fecha Finalización
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your fecha de finalización"
                name="fecha_final"
                value={fecha_final}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción del Curso
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your descripción del curso"
                name="descripcion"
                value={descripcion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
