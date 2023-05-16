import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            LOGO
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
