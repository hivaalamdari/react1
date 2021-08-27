import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="title">This is a tutorial page </div>
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu-inside">
          <a className="navbar-brand" href="#">
            Hiva
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">X</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="/aboutus">
                    AboutUs
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="/contacts">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="/post">
                    Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
