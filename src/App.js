import React, { useState } from "react";
import "./App.css";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const toggleModeDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      popAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      popAlert("Light Mode Enabled", "success");
    }
  };

  const popAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`form-check form-switch text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={toggleModeDark}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </nav>
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route path="/" element={<TextForm mode={mode} />} />
            <Route path="/about" element={<AboutUs mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
