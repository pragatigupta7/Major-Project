import React from 'react'
import { Link } from 'react-router-dom'
import header from '../assets/Logo.png'


const Navbar = () => {
  return (
    <header className="foi-header landing-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
        <Link className="navbar-brand" to="#">
        <img src={header} alt="logo" />
        </Link>
        <button className="navbar-toggler d-lg-none" type="button"data-toggle="collapse" data-target="#collapsibleNavId"aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Features">
                Features
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle"to="#"id="pagesMenu"data-toggle="dropdown"aria-haspopup="true"aria-expanded="false">
                Pages
              </Link>
              <div className="dropdown-menu" aria-labelledby="pagesMenu">
                <a className="dropdown-item" href="blog.html">
                  Blog
                </a>
                <a className="dropdown-item" href="login.html">
                  Login
                </a>
                <a className="dropdown-item" href="register.html">
                  Register
                </a>
                <a className="dropdown-item" href="faq.html">
                  FAQ
                </a>
                <a className="dropdown-item" href="404.html">
                  404
                </a>
                <a className="dropdown-item" href="careers.html">
                  Careers
                </a>
                <a className="dropdown-item" href="blog-single.html">
                  Single blog
                </a>
                <a className="dropdown-item" href="privacy-policy.html">
                  Privacy policy
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item mr-2 mb-3 mb-lg-0">
              <Link className="btn btn-secondary" to="/Signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-secondary" to="/Login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    
     </div>
     </header>
  )
}

export default Navbar
