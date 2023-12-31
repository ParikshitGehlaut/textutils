import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import Darkmodeextensiom from "./Darkmodeextensiom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* <div className="extension mx-2">
            <Darkmodeextensiom />
          </div> */}
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("primary");
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("danger");
              }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("warning");
              }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("success");
              }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
                border: "1.5px solid black",
              }}
              onClick={() => {
                props.togglemode("light");
              }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              style={{
                height: "20px",
                width: "20px",
                cursor: "pointer",
                border: "1.5px solid white",
              }}
              onClick={() => {
                props.togglemode("dark");
              }}
            ></div>
          </div>
          {/* <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={() => {
                props.togglemode(null);
              }}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Togglemode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
