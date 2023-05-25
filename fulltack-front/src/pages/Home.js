import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [matriculas, setMatriculas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
    loadCursos();
    loadMatriculas();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const loadCursos = async () => {
    const result = await axios.get("http://localhost:8080/cursos");
    setCursos(result.data);
  };
  const loadMatriculas = async () => {
    const result = await axios.get("http://localhost:8080/matriculas");
    setMatriculas(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  const deleteCurso = async (id_curso) => {
    await axios.delete(`http://localhost:8080/curso/${id_curso}`);
    loadCursos();
  };
  const deleteMatricula = async (id) => {
    await axios.delete(`http://localhost:8080/matricula/${id}`);
    loadMatriculas();
  };

  return (
    <div className="container">
      <div className="py-4">
      <h1>USUARIOS</h1>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-4">
        <h1>CURSOS</h1>
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha Inicio</th>
            <th scope="col">Fecha Final</th>
            <th scope="col">Descripción</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{curso.nombre_curso}</td>
              <td>{curso.fecha_inicio}</td>
              <td>{curso.fecha_final}</td>
              <td>{curso.descripcion}</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewcurso/${curso.id_curso}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editcurso/${curso.id_curso}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteCurso(curso.id_curso)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>

      <div className="py-4">
        <h1>MATRÍCULAS</h1>
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Nombre del Usuario</th>
            <th scope="col">Fecha Matricula</th>
            <th scope="col">Nombre del Curso</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {matriculas.map((matricula, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{matricula.id}</td>
              <td>{matricula.fecha_matricula}</td>
              <td>{matricula.id_curso}</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/viewmatricula/${matricula.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editmatricula/${matricula.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteMatricula(matricula.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>

      </div>
    </div>
  );
}



