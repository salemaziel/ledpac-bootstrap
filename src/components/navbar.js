import React from "react";

import {
    LogoLight
  } from '../images/index'

const Navbar = (props) => {
    return(
        <>
<nav className="navbar navbar-expand-lg py-4 navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img className="img-fluid" src={LogoLight} alt width="96px" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav05" aria-controls="nav05" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="nav05">
      <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-auto mr-4 text-white">
        <li className="nav-item mr-4"><a className="nav-link" href="#">Home</a></li>
        <li className="nav-item mr-4"><a className="nav-link" href="#">About</a></li>
        <li className="nav-item mr-4"><a className="nav-link" href="#">Products</a></li>
        <li className="nav-item mr-4"><a className="nav-link" href="#">Our Work</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>


        </>
    )
}

export default Navbar