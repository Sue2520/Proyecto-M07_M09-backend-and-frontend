import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditMatricula() {
  let navigate = useNavigate();

  const { id_matricula } = useParams();

  const [matricula, setMatricula] = useState({
    id: "",
    fecha_matricula: "",
    id_curso: ""
  });

  const { id, fecha_matricula, id_curso } = matricula;

  const onInputChange = (e) => {
    // console.log(e.target.name);
    setMatricula({ ...matricula, [e.target.name]: e.target.value });
    // console.log(matricula);
  };

  const [usuarios, setUsuarios] = useState([0]);
  const [cursos, setCursos] = useState([0]);

  useEffect(() => {
    loadMatricula();
    getDatos();
  }, []);

  const getDatos = async () => {
    let responseUsuarios = await axios.get("http://localhost:8080/users");

    if (responseUsuarios) {
      setUsuarios(responseUsuarios.data);
    }

    let responseCursos = await axios.get("http://localhost:8080/cursos");

    if (responseCursos) {
      setCursos(responseCursos.data);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/matricula/${id_matricula}`, matricula);
    navigate("/home");
  };

  const loadMatricula = async () => {
    const result = await axios.get(`http://localhost:8080/matricula/${id_matricula}`, matricula);
    setMatricula(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Matricula</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="id" className="form-label">
                Id del Usuario
                <select name="id" onChange={(e) => onInputChange(e)}>
                  <option value=""></option>
                  {usuarios.map((user, index) => {
                    return (
                      <>
                        <option value={user.id}>{user.name}</option>
                        <p>{user.name}</p>
                      </>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="fecha_matricula" className="form-label">
              Fecha Matricula
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Introduce la fecha de matriculacion"
                name="fecha_matricula"
                value={fecha_matricula}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="id_curso" className="form-label">
                Id del curso
              </label>
              
              <select
                placeholder="Introduce la id del curso"
                name="id_curso"
                onChange={(e) => onInputChange(e)}
              >
                <option value=""></option>
                {cursos.map((curso, index) => {
                  return (
                    <>
                      <option value={curso.id_curso}>{curso.id_curso}</option>
                      <p>{curso.name}</p>
                    </>
                  );
                })}
              </select>
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
