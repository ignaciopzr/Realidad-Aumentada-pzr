import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import UserCrud from './UserCrud';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/">
            Realidad Aumentada
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
        
              <li className="nav-item">
                <Link className="nav-link" to="/crud">
                  CRUD DE USUARIOS
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/crud" element={<UserCrud />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;