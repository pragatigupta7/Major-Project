import React from 'react'

const Digitalmarketing = () => {
  return (
    <div>
      <>
  {/*<div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot" />
      <div className="dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  </div>
  {/* ***** Preloader End ***** */}
  {/* ***** Pre-Header Area Start ***** */}
  <div className="pre-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-phone" />
                  +000 1234 5678
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope" />
                  infocompany@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker" />
                  St. London 54th Bull
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ***** Pre-Header Area End ***** */}
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              <img
                src="assets/images/logo.png"
                alt=""
                style={{ maxWidth: 112 }}
              />
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section">
                <a href="#top" className="active">
                  Home
                </a>
              </li>
              <li className="scroll-to-section">
                <a href="#services">Services</a>
              </li>
              <li className="scroll-to-section">
                <a href="#projects">Projects</a>
              </li>
              <li className="has-sub">
                <a href="javascript:void(0)">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="faqs.html">FAQs</a>
                  </li>
                </ul>
              </li>
              <li className="scroll-to-section">
                <a href="#infos">Infos</a>
              </li>
              <li className="scroll-to-section">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  <div className="main-banner" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="caption header-text">
            <h6>SEO DIGITAL AGENCY</h6>
            <div className="line-dec" />
            <h4>
              Dive <em>Into The SEO</em> World <span>With Tale</span>
            </h4>
            <p>
              Tale is the best SEO agency website template using Bootstrap
              v5.2.2 CSS for your company. It is a free download provided by
              TemplateMo. There are 3 HTML pages, <a href="index.html">Home</a>,{" "}
              <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.
            </p>
            <div className="main-button scroll-to-section">
              <a href="#services">Discover More</a>
            </div>
            <span>or</span>
            <div className="second-button">
              <a href="faqs.html">Check our FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="services section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>
                  We Provide <em>Different Services</em> &amp;
                  <span>Features</span> For Your Agency
                </h2>
                <div className="line-dec" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/services-01.jpg"
                    alt="discover SEO"
                    className="templatemo-feature"
                  />
                </div>
                <h4>Discover More on Latest SEO Trends</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/services-02.jpg"
                    alt="data analysis"
                    className="templatemo-feature"
                  />
                </div>
                <h4>Real-Time Big Data Analysis</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/services-03.jpg"
                    alt="precise data"
                    className="templatemo-feature"
                  />
                </div>
                <h4>Precise Data Analysis &amp; Prediction</h4>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img
                    src="assets/images/services-04.jpg"
                    alt="SEO marketing"
                    className="templatemo-feature"
                  />
                </div>
                <h4>SEO Marketing &amp; Social Media</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="projects section" id="projects">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h2>
              Discover Our <em>Work</em> &amp; <span>Projects</span>
            </h2>
            <div className="line-dec" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
              eiusmod.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-features owl-carousel">
            <div className="item">
              <img src="assets/images/projects-01.jpg" alt="" />
              <div className="down-content">
                <h4>Digital Agency HTML Templates</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/projects-02.jpg" alt="" />
              <div className="down-content">
                <h4>Admin Dashboard CSS Templates</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/projects-03.jpg" alt="" />
              <div className="down-content">
                <h4>Best Responsive Website Layouts</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/projects-04.jpg" alt="" />
              <div className="down-content">
                <h4>HTML CSS Layouts for your websites</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/projects-02.jpg" alt="" />
              <div className="down-content">
                <h4>Bootstrap 5 Themes for Free</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
            <div className="item">
              <img src="assets/images/projects-03.jpg" alt="" />
              <div className="down-content">
                <h4>Mobile Friendly Website Layouts</h4>
                <a href="#">
                  <i className="fa fa-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="infos section" id="infos">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-image">
                  <img src="assets/images/left-infos.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2>
                    More <em>About Us</em> &amp; What <span>We Offer</span>
                  </h2>
                  <div className="line-dec" />
                  <p>
                    You are free to use this template for any purpose. You are
                    not allowed to redistribute the downloadable ZIP file of
                    Tale SEO Template on any other template website. Please
                    contact us. Thank you.
                  </p>
                </div>
                <div className="skills">
                  <div className="skill-slide marketing">
                    <div className="fill" />
                    <h6>Marketing</h6>
                    <span>90%</span>
                  </div>
                  <div className="skill-slide digital">
                    <div className="fill" />
                    <h6>Ditigal Media</h6>
                    <span>80%</span>
                  </div>
                  <div className="skill-slide media">
                    <div className="fill" />
                    <h6>Social Media Managing</h6>
                    <span>95%</span>
                  </div>
                </div>
                <p className="more-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doers eiusmod tempor incididunt ut labore et dolore dolor
                  dolor sit amet, consectetur adipiscing elit, sed doers
                  eiusmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-us section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="contact-us-content">
            <div className="row">
              <div className="col-lg-4">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                    width="100%"
                    height="670px"
                    frameBorder={0}
                    style={{ border: 0, borderRadius: 23 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <form id="contact-form" action="" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-heading">
                        <h2>
                          <em>Contact Us</em> &amp; Get In <span>Touch</span>
                        </h2>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name..."
                          autoComplete="on"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="surname"
                          name="surname"
                          id="surname"
                          placeholder="Your Surname..."
                          autoComplete="on"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your E-mail..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6">
                      <fieldset>
                        <input
                          type="subject"
                          name="subject"
                          id="subject"
                          placeholder="Subject..."
                          autoComplete="on"
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="orange-button"
                        >
                          Send Message Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
                <div className="more-info">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-phone" />
                        <h4>
                          <a href="#">010-020-0340</a>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-envelope" />
                        <h4>
                          <a href="#">info@company.com</a>
                        </h4>
                        <h4>
                          <a href="#">hello@company.com</a>
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="info-item">
                        <i className="fa fa-map-marker" />
                        <h4>
                          <a href="#">
                            Sunny Isles Beach, FL 33160, United States
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>
          Copyright © 2036 <a href="#">Tale SEO Agency</a>. All rights reserved.
          <br />
          Design:{" "}
          <a href="https://templatemo.com" target="_blank">
            TemplateMo
          </a>
        </p>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Digitalmarketing
