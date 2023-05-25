import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Logout from "./login/logout";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import AddCurso from "./cursos/AddCurso";
import EditCurso from "./cursos/EditCurso";
import ViewCurso from "./cursos/ViewCurso";
import AddMatricula from "./matriculas/AddMatricula";
import EditMatricula from "./matriculas/EditMatricula";
import ViewMatricula from "./matriculas/ViewMatricula";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/addcurso" element={<AddCurso />} />
          <Route exact path="/editcurso/:id_curso" element={<EditCurso />} />
          <Route exact path="/viewcurso/:id_curso" element={<ViewCurso />} />
          <Route exact path="/addmatricula" element={<AddMatricula />} />
          <Route exact path="/editmatricula/:id" element={<EditMatricula />} />
          <Route exact path="/viewmatricula/:id" element={<ViewMatricula />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
