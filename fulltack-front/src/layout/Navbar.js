import React from "react";
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';

export default function Navbar() {

  var nav="";
  var text = "Full Stack Application";

  if(ReactSession.get('username') !== "") {
    var redirect = "/home";
    text = "¡Bienvenido, " + ReactSession.get('username') + "!";
    nav = 
    <><Link className="btn btn-outline-light" to="/addmatricula">
        Add Matricula
      </Link>
      <Link className="btn btn-outline-light" to="/addcurso">
          Add Curso
        </Link>
        <Link className="btn btn-outline-light" to="/adduser">
          Add User
        </Link>
        <Link className="navbar-brand" to="/logout">
          Logout
        </Link></>
  }
  else {
    var redirect = "/";
    nav = "";
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {text}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {nav}
        </div>
      </nav>
    </div>
  );
}
