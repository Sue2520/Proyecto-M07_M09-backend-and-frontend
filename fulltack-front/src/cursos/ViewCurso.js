import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCurso() {
  const [curso, setCurso] = useState({
    nombre_curso: "",
    fecha_inicio: "",
    fecha_final: "",
    descripcion: ""
  });

  const { id_curso } = useParams();

  useEffect(() => {
    loadCurso();
  }, []);

  const loadCurso = async () => {
    const result = await axios.get(`http://localhost:8080/curso/${id_curso}`);
    setCurso(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Curso Details</h2>

          <div className="card">
            <div className="card-header">
              Id del Curso : {curso.id_curso}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nombre Curso:</b>
                  {curso.nombre_curso}
                </li>
                <li className="list-group-item">
                  <b>Fecha Inicio:</b>
                  {curso.fecha_inicio}
                </li>
                <li className="list-group-item">
                  <b>Fecha Finalización:</b>
                  {curso.fecha_final}
                </li>
                <li className="list-group-item">
                  <b>Descripción:</b>
                  {curso.descripcion}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}