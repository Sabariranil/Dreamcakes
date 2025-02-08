import React from "react";
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  custom-navbar">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="shop">
            <h1 className="dreamcake">
              <span className="dream">Dream</span>Cakes
            </h1>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home me-2"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  <i className="fas fa-utensils me-2"></i> Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-info-circle me-2"></i> About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <i className="fas fa-envelope me-2"></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
