import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bannerryt from "../assets/images/banner-right-image.png"
import port from "../assets/images/portfolio-image.png"
import './view.css'
import { Link } from 'react-router-dom'

const View = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const fetchaddprofile = async () => {
    const res = await fetch("http://localhost:5000/addprofile/getbyid/" + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setProfile(data);
    };
  }

  useEffect(() => {
    fetchaddprofile();
  }, []);

  return (
    <div>

      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <h6>Welcome {profile.name}</h6>
                    <h2>
                      {profile.companyname}
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s">

                    <img
                      src={bannerryt}
                      alt="team meeting" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary" /><h1>ABOUT</h1>
              <h2 className="font-weight-light">Crafting Connections, Inspiring Growth</h2>
              <p className="font-italic text-muted mb-4">
                {profile.description}
              </p>

            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>

        </div>
      </div>

      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading  wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h2>
                  Unleash the   <em>Potential</em> &amp; of Our Unique{" "}
                  <span>Features!</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <Link to="#">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="hidden-content">
                    <h4>SEO Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src={port} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Link to="#">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="hidden-content">
                    <h4>Website Reporting</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src={port} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="hidden-content">
                    <h4>Performance Tests</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src={port} alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="hidden-content">
                    <h4>Data Analysis</h4>
                    <p>Lorem ipsum dolor sit ameti ctetur aoi adipiscing eto.</p>
                  </div>
                  <div className="showed-content">
                    <img src={port} alt="" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br><br></br>
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>
                <ul className="contact-ul">
                  <li>
                    <i className="fa fa-location-dot" /> 91, Ram Nagar, Ram Mandir,
                    Delhi
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <Link href="tel:08510004495">
                      <b>{profile.contactnumber}</b>
                    </Link>
                    ,
                    <Link to="tel:08510005495">
                      <b>{profile.contactnumber}</b>
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" />
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> {profile.email}</b>
                    </a>
                  </li>
                </ul>
                <span>
                  <Link to="#" className="fb">
                    <i className="fa-brands fa-facebook" />
                  </Link>
                  <Link to="#" className="insta">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link to="#" className="twitter">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <form action="#" className="contFrm" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      className="inptFld"
                      required=""
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="submit"
                      name="submit"
                      defaultValue="SUBMIT"
                      className="inptBtn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p> Copyright © All rights reserved | Ajeet</p>
          </div>
        </div>
      </section>



    </div>
  )
}

export default View