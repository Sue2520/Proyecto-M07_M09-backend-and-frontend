import axios from "axios";
import React, { useState } from "react";
import { ReactSession } from 'react-client-session';
import { Link, useNavigate } from "react-router-dom";

ReactSession.setStoreType("localStorage");

export default function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const {username, password} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users/checkIfExists", user)
    .then(function (response) {
      if(response.data.length == 0) {
        alert("El usuario o contraseña son incorrectos");
      }
      else {
        ReactSession.set("username", response.data[0].username);
        navigate('/home');
        window.location.reload();
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}