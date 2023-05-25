import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// class AddMatricula extends Component {
//   constructor(props) {
//     super(props);
//   }

function AddMatricula() {
  let navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([0]);
  const [cursos, setCursos] = useState([0]);

  useEffect(() => {
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

  const ola = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/cursos", cursos);
    navigate("/");
  };

  const [matricula, setMatricula] = useState({
    id: "",
    fecha_matricula: "",
    id_curso: "",
  });

  const { id, fecha_matricula, id_curso } = matricula;

  const onInputChange = (e) => {
    // alert(e.target.name, e.target.value)
    setMatricula({ ...matricula, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/matricula", matricula);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Añadir Matricula</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Nombre del Usuario
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
                Fecha de Matriculación
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Escribe la fecha de matriculación"
                name="fecha_matricula"
                value={fecha_matricula}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="id_curso" className="form-label">
                Nombre del curso
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
                      <option value={curso.nombre_curso}>{curso.nombre_curso}</option>
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

export default AddMatricula;
