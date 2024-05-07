import React from 'react'
import error from '../assets/404.png'
import { Link } from 'react-router-dom'
import insta from '../assets/instagram.svg'
import fb from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'
import header from '../assets/Logo.png'

const Error = () => {
  return (
    <div><>
    <header className="foi-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light foi-navbar">
          <Link className="navbar-brand" to="#">
            <img src={header} alt="FOI" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
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
                <Link
                  className="nav-link dropdown-toggle"
                 to="/404"
                  id="pagesMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false" >
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
                  contact
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
    <main className="page-error">
      <div className="container">
        <section className="error-section">
          <h1 className="error-code">404</h1>
          <p className="error-message">
            Sorry, the page you are looking for could not be found.
          </p>
          <img src={error} alt="logo"  className="error-img"/>
            
          <Link to="/Home" className="btn btn-info btn-error-action">
            Return Home
          </Link>
        </section>
      </div>
    </main>
    <footer className="foi-footer text-white">
      <div className="container">
        <div className="row footer-content">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <h2 className="mb-0">
              Do you want to know more or just have a question? write to us.
            </h2>
          </div>
          <div className="col-md-4 col-lg-5 col-xl-6 py-3 py-md-0 d-md-flex align-items-center justify-content-end">
            <Link to="/contact" className="btn btn-danger btn-lg">
              Contact form
            </Link>
          </div>
        </div>
        <div className="row footer-widget-area">
          <div className="col-md-3">
            <div className="py-3">
              <img src="assets/images/logo-white.svg" alt="FOI" />
            </div>
            <p className="font-os font-weight-semibold mb3">Get our mobile app</p>
            <div>
              <button className="btn btn-app-download mr-2">
                <img src="assets/images/ios.svg" alt="App store" />
              </button>
              <button className="btn btn-app-download">
                <img src="assets/images/android.svg" alt="play store" />
              </button>
            </div>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    My tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Edit profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Activity
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <nav>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Careers{" "}
                    <span className="badge badge-pill badge-secondary ml-3">
                      Hiring
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#!" className="nav-link">
                    Shop with us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-3 mt-3 mt-md-0">
            <p>
              © foi. 2020{" "}
              <a
                href="https://www.bootstrapdash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset"
              >
                BootstrapDash
              </a>
              .
            </p>
            <p>All rights reserved.</p>
            <nav className="social-menu">
          <Link to="#!">
                  <img src={fb} alt="logo" />
                </Link>
                <Link to="#!">
                  <img src={insta} alt="logo" />
                </Link>
                <Link to="#!">
                  <img src={twitter} alt="logo" />
                </Link>
                <Link to="#!">
                  <img src={yt} alt="logo" />
                </Link>
          </nav>
          </div>
        </div>
      </div>
    </footer>
  </>
  
      
    </div>
  )
}

export default Error
