import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewMatricula() {
  const [matricula, setMatricula] = useState({
    id: "",
    fecha_matricula: "",
    id_curso: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadMatricula();
  }, []);

  const loadMatricula = async () => {
    const result = await axios.get(`http://localhost:8080/matricula/${id}`);
    setMatricula(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Matricula Detalles</h2>

          <div className="card">
            <div className="card-header">
              Id del usuario : {matricula.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nombre de Usuario:</b>
                  {matricula.name_user}
                </li>
                <li className="list-group-item">
                  <b>Fecha de Matriculación:</b>
                  {matricula.fecha_matricula}
                </li>
                <li className="list-group-item">
                  <b>Nombre del Curso:</b>
                  {matricula.id_curso}
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