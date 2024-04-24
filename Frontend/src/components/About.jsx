import React from 'react'
import aboutsection from '../assets/aboutsection.webp'
import aboutsection2 from '../assets/aboutsection.png'
import { Link } from 'react-router-dom'
import insta from '../assets/instagram.svg'
import fb from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'

const About = () => {
  return (
    <>
     
  <main className="page-about">
    <div className="container">
      <section className="page-header">
        <h1>About</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb foi-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/Home">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>
      </section>
     
      <section className="foi-page-section pt-0">
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
            <h2 className="about-section-one-title">
            No more bouncing between websites {" "}
              <span className="font-weight-normal">
              everything you need is right here, at your fingertips
              </span>
            </h2>
            <div className="about-section-one-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex.
              </p>
            </div>
          </div>
          <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
            <img
              src={aboutsection}alt="about"className="img-fluid "width="300px" style={{marginLeft:'50%'}} />
          </div>
        </div>
      </section>
      <section className="foi-page-section">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <img
              src={aboutsection2}
              alt="about 2"
              className="w-120 img-fluid pr-md-5"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h2 className="about-section-two-title">
              We create the best{" "}
              <span className="font-weight-normal">
                solution for you and your business.
              </span>
            </h2>
            <div className="about-section-two-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
              </p>
              <p>
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="foi-page-section mb-5">
        <h5 className="text-center font-os mb-0">The amazing team</h5>
        <h2 className="team-section-title">Our Creative Minds</h2>
        <div className="row">
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img src={aboutsection2} alt="Cardarion Hart" className="team-member-avatar"/>
              <h6 className="mb-0">Cardarion Hart</h6>
              <p className="team-member-designation">CEO</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_2.png"
                alt="Gauthier Drewitt"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Gauthier Drewitt</h6>
              <p className="team-member-designation">HR Manager</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_3.png"
                alt="Labeeba Al Amer"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Labeeba Al Amer</h6>
              <p className="team-member-designation">Finance Manager</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_4.png"
                alt="Onyama Limba"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Onyama Limba</h6>
              <p className="team-member-designation">Software Engineer</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_5.png"
                alt="Athar Malakooti"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Athar Malakooti</h6>
              <p className="team-member-designation">CEO</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_6.png"
                alt="Kung Jiyeon"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Kung Jiyeon</h6>
              <p className="team-member-designation">HR Manager</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_7.png"
                alt="Mathijn Agter"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Mathijn Agter</h6>
              <p className="team-member-designation">Finance Manager</p>
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div className="team-member-card">
              <img
                src="assets/images/user/user_8.png"
                alt="Jontray Arnold"
                className="team-member-avatar"
              />
              <h6 className="mb-0">Jontray Arnold</h6>
              <p className="team-member-designation">Software Engineer</p>
            </div>
          </div>
        </div>
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
          <a href="contact.html" className="btn btn-danger btn-lg">
            Contact form
          </a>
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

  )
}

export default About
