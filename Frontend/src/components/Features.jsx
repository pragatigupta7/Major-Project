import React from 'react'
import { Link } from 'react-router-dom'
import features from '../assets/feature.jpg'
import insta from '../assets/instagram.svg'
import fb from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'

const Features = () => {
    return (
        <>
            <main>
                <div className="container">
                    <section className="page-header">
                        <h2>Amazing Features</h2>
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
                    <section className="foi-page-section">
                        <div className="row mb-5">
                            <div className="col-md-4 foi-feature">
                                 <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Privacy</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Genuine Review</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Trust and Crediability</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Secure Data</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Easy to find</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Full Support</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Direct Contact</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Powerful dashboard</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                            <div className="col-md-4 foi-feature">
                            <i className="fa-solid fa-shield-halved feature-icon"  alt="icon"/>
                                <h5 className="feature-title">Unlimited Features</h5>
                                <p className="feature-content">
                                    Lorem ipsum dolor sit amt, consectet adop adipisicing elit, sed do
                                    eiusmod teporara incididunt ugt labore.
                                </p>
                                <a href="#!" className="feature-link">
                                    Find out More
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="foi-page-section">
                        <div className="row">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <img
                                    src={features}
                                    alt="faq"
                                    className="img-fluid"
                                    width="424px"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="feature-faq-title">Awesome Interface</h2>
                                <div className="card feature-faq-card">
                                    <div className="card-header bg-white" id="featureFaqOneTitle">
                                        <Link
                                            to="#featureFaqOneCollapse"
                                            className="d-flex align-items-center"
                                            data-toggle="collapse" >
                                            <h5 className="mb-0">How can I contact the customer support team for assistance?</h5>{" "}
                                            <i className="far fa-plus-square ml-auto" />
                                        </Link>
                                    </div>
                                    <div
                                        id="featureFaqOneCollapse"className="collapse"aria-labelledby="featureFaqOneTitle">
                                        <div className="card-body">
                                            <p className="mb-0 text-gray">
                                            You can easily reach our customer support team by navigating to the "Contact Us" section of our website. There, you'll find various contact options, including phone numbers, email addresses, and a contact form. Our dedicated support staff is available during business hours to assist you with any inquiries or concerns you may have. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card feature-faq-card">
                                    <div className="card-header bg-white" id="featureFaqTwoTitle">
                                        <a
                                            href="#featureFaqTwoCollapse"
                                            className="d-flex align-items-center"
                                            data-toggle="collapse">
                                            <h5 className="mb-0">Which license should I need?</h5>{" "}
                                            <i className="far fa-plus-square ml-auto" />
                                        </a>
                                    </div>
                                    <div
                                        id="featureFaqTwoCollapse"
                                        className="collapse"
                                        aria-labelledby="featureFaqTwoTitle"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0 text-gray">
                                                Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of
                                                type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card feature-faq-card">
                                    <div className="card-header bg-white" id="featureFaqThreeTitle">
                                        <a
                                            href="#featureFaqThreeCollapse"
                                            className="d-flex align-items-center"
                                            data-toggle="collapse"
                                        >
                                            <h5 className="mb-0">
                                                How do I get a receipt for my purchase?
                                            </h5>{" "}
                                            <i className="far fa-plus-square ml-auto" />
                                        </a>
                                    </div>
                                    <div
                                        id="featureFaqThreeCollapse"
                                        className="collapse"
                                        aria-labelledby="featureFaqThreeTitle"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0 text-gray">
                                                Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of
                                                type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card feature-faq-card">
                                    <div className="card-header bg-white" id="featureFaqFourTitle">
                                        <a
                                            href="#featureFaqFourCollapse"
                                            className="d-flex align-items-center"
                                            data-toggle="collapse"
                                        >
                                            <h5 className="mb-0">How do I report an issue?</h5>{" "}
                                            <i className="far fa-plus-square ml-auto" />
                                        </a>
                                    </div>
                                    <div
                                        id="featureFaqFourCollapse"
                                        className="collapse"
                                        aria-labelledby="featureFaqFourTitle"
                                    >
                                        <div className="card-body">
                                            <p className="mb-0 text-gray">
                                                Lorem Ipsum has been the industry's standard dummy text ever
                                                since the 1500s, when an unknown printer took a galley of
                                                type and scrambled it to make a type specimen book.
                                            </p>
                                        </div>
                                    </div>
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

export default Features
