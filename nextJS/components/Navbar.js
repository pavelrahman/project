import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/about"><a className="nav-link">About</a></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Add
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/add-manufacturer">Car Mnufacturer</a>
            <a className="dropdown-item" href="/add-car-model">Car Model</a>
            <a className="dropdown-item" href="#">Car</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Showroom</a>
          </div>
        </li>
      </ul>

      <ul className="navbar-nav mr">
        <li className="nav-item">
          <Link href="/login"><a className="nav-link">Sign in</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/register"><a className="nav-link">Sign up</a></Link>
        </li>
      </ul>
    </div>
  </nav>
)



export default Navbar
