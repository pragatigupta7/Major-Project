import React from 'react'
import aboutsection from '../assets/aboutsection.webp'
import aboutsection2 from '../assets/aboutsection.png'
import { Link } from 'react-router-dom'

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
</>

  )
}

export default About
