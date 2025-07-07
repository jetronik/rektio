import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          Time to lear rektio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                What You'll Lern
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">
                Queations
              </a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">
                Instuctors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
