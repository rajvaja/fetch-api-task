import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/bootstrap.min.css"


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}><h1>TASK</h1> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0"  >Search</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default Navbar;