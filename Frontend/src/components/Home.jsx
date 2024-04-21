import React from 'react'
import hub from '../assets/hub.png'
import about from '../assets/about.png'
import slack from '../assets/client/clients/slack.svg'
import Samsung from '../assets/client/clients/samsung.svg'
import Paypal from '../assets/client/clients/paypal.svg'
import Google from '../assets/client/clients/google.svg'
import spotify from '../assets/client/clients/spotify.svg'
import Amazon from '../assets/client/clients/amazon.svg'
import { Link } from 'react-router-dom'
import header from '../assets/Logo.png'

const Home = () => {
  return (
    <>

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
    
     
      <div className="header-content">
        <div className="row">
          <div className="col-md-6">
            <h1>Connecting Vision, Innovation, and Collaboration: Welcome to Our Corporate Hub.</h1>
            <p className="text-dark">
            Fueling Innovation, Fostering Connections: Your Central Hub for Corporate Excellence.
            </p>
            <button className="btn btn-primary mb-4">Get Started</button>
            
          </div>
          <div className="col-md-6">
          <img src={hub} alt="logo"width="388px"className="img-fluid"/>
          </div>
        </div>
      </div>
      </div>
     </header>
 
  <section className="py-5 mb-5">
    <div className="container">
      <h2 className="section-title">Features</h2>
      <div className="row">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <h5>Improved Transparency</h5>
          <p className="text-dark">
          Genuine user reviews promote transparency and help users make informed decisions. 
          </p>
          <p className="mb-5">
            <a href="#!" className="text-primary mb-5">
              Find out More
            </a>
          </p>
          <h5>Information Hub</h5>
          <p className="text-dark">
          Company profile websites serve as a centralized hub for all relevant information about your business, including contact details, team bios, FAQs, and customer testimonials, making it easy for visitors to find what they need.
          
          </p>
          <p className="mb-5">
            <a href="#!" className="text-primary mb-5">
              Find out More
            </a>
          </p>
        </div>
        <div className="col-lg-4 mb-3 mb-lg-0">
          <h5>Credibility and Trust</h5>
          <p className="text-dark">
          Experience the confidence of browsing a trusted website, where security and transparency are non-negotiable.
          </p>
          <p className="mb-5">
            <a href="#!" className="text-primary mb-5">
              Find out More
            </a>
          </p>
          <h5>Analytics and Insights</h5>
          <p className="text-dark">
          Company profile websites can be integrated with analytics tools to track visitor behavior, monitor website performance, and gather insights that can inform strategic decision-making and optimize marketing efforts.
          </p>
          <p className="mb-5">
            <a href="#!" className="text-primary mb-5">
              Find out More
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <h6 className="text-gray font-os font-weight-semibold">
            Trusted by the world's best
          </h6>
          <div
            id="landingClientCarousel"
            className="carousel slide landing-client-carousel"
            data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="clients-logo">
                  <img src={slack}  alt="Slack"className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Samsung}alt="Spotify"className="img-fluid"/></div>
                  <div className="clients-logo">
                    <img src={Paypal} alt="Paypal" className="img-fluid"/> </div>
                  <div className="clients-logo">
                    <img src={Amazon} alt="Amazon" className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Google}alt="Google"className="img-fluid"/>
                  </div>
                  <div className="clients-logo">
                    <img src={spotify}alt="Samsung"className="img-fluid"/></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="clients-logo">
                  <img src={slack}  alt="Slack"className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Samsung}alt="Spotify"className="img-fluid"/></div>
                  <div className="clients-logo">
                    <img src={Paypal} alt="Paypal" className="img-fluid"/> </div>
                  <div className="clients-logo">
                    <img src={Amazon} alt="Amazon" className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Google}alt="Google"className="img-fluid"/>
                  </div>
                  <div className="clients-logo">
                    <img src={spotify}alt="Samsung"className="img-fluid"/></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="clients-logo">
                  <img src={slack}  alt="Slack"className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Samsung}alt="Spotify"className="img-fluid"/></div>
                  <div className="clients-logo">
                    <img src={Paypal} alt="Paypal" className="img-fluid"/> </div>
                  <div className="clients-logo">
                    <img src={Amazon} alt="Amazon" className="img-fluid" /></div>
                  <div className="clients-logo">
                    <img src={Google}alt="Google"className="img-fluid"/>
                  </div>
                  <div className="clients-logo">
                    <img src={spotify}alt="Samsung"className="img-fluid"/></div>    
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li
                data-target="#landingClientCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#landingClientCarousel" data-slide-to={1} />
              <li data-target="#landingClientCarousel" data-slide-to={2} />
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5 mb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-5 mb-md-0">
        <img src={about} alt="logo" className="img-fluid"
            width="492px"/>
            
        </div>
        <div className="col-md-6">
          <h2 className="section-title">
          One platform, endless possibilities – find any business, anytime, anywhere.
          </h2>
          <p className="mb-5">
          The current business landscape lacks a centralized platform where companies can comprehensively showcase their profiles and users can discover them with ease. Existing solutions often focus on specific aspects like job listings or basic company information. </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="media landing-feature">
                <span className="landing-feature-icon" />
                <div className="media-body">
                  <h5>Essentials</h5>
                  <p>
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="media landing-feature">
                <span className="landing-feature-icon" />
                <div className="media-body">
                  <h5>Premium</h5>
                  <p>
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="media landing-feature">
                <span className="landing-feature-icon" />
                <div className="media-body">
                  <h5>Standard</h5>
                  <p>
                    All the basics for businesses that are just getting started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5 mb-5">
    <div className="container">
      <h2>Choose the plan that’s right for yor business</h2>
      <p className="text-muted mb-5">
        Thank you for your very professional and prompt response. I wished I had
        found you before{" "}
      </p>
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card pricing-card border-warning">
            <div className="card-body">
              <h3 className="mb-1">Starter</h3>
              <h3 className="mb-1 text-warning">Free</h3>
              <p className="payment-period">Per month</p>
              <p className="mb-4">
                Thank you for your very professional and prompt response.
              </p>
              <button className="btn btn-outline-warning btn-rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card pricing-card border-primary active">
            <div className="card-body">
              <h3>Popular</h3>
              <h3 className="text-primary">$23.00</h3>
              <p className="payment-period">Per month</p>
              <p className="mb-4">
                Thank you for your very professional and prompt response.
              </p>
              <button className="btn btn-primary btn-rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card pricing-card border-success">
            <div className="card-body">
              <h3>Enterprise</h3>
              <h3 className="text-success">$40.00</h3>
              <p className="payment-period">Per month</p>
              <p className="mb-4">
                Thank you for your very professional and prompt response.
              </p>
              <button className="btn btn-outline-success btn-rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5 mb-5">
    <div className="container">
      <h2>Satisfied Users</h2>
      <p className="text-muted mb-5">
        Thank you for your very professional and prompt response. I wished I had
        found you before{" "}
      </p>
      <div className="row">
        <div className="col-md-4 foi-review mb-5 mb-md-0">
          <div className="foi-rating">
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
          </div>
          <h5 className="foi-review-heading">Great support available</h5>
          <p className="foi-review-content">
            Thank you for your very professional and prompt response. I wished I
            had found you before I spent money on a competitors theme.
          </p>
          <div className="media foi-review-user">
            <img
              src="assets/images/avatar/avatar_11.jpg"
              alt="user"
              className="avatar"
            />
            <div className="media-body">
              <h6 className="mb-0">Amarachi Nkechi</h6>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 foi-review mb-5 mb-md-0">
          <div className="foi-rating">
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
          </div>
          <h5 className="foi-review-heading">Great support available</h5>
          <p className="foi-review-content">
            Thank you for your very professional and prompt response. I wished I
            had found you before I spent money on a competitors theme.
          </p>
          <div className="media foi-review-user">
            <img
              src="assets/images/avatar/avatar_12.jpg"
              alt="user"
              className="avatar"
            />
            <div className="media-body">
              <h6 className="mb-0">Margje Jutten</h6>
              <p>Developer</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 foi-review mb-5 mb-md-0">
          <div className="foi-rating">
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
            <span className="fas fa-star checked" />
          </div>
          <h5 className="foi-review-heading">Great support available</h5>
          <p className="foi-review-content">
            Thank you for your very professional and prompt response. I wished I
            had found you before I spent money on a competitors theme.
          </p>
          <div className="media foi-review-user">
            <img
              src="assets/images/avatar/avatar_13.jpg"
              alt="user"
              className="avatar"
            />
            <div className="media-body">
              <h6 className="mb-0">Monica Böttger</h6>
              <p>UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5 mb-5">
    <div className="container">
      <h2>FAQ</h2>
      <p className="section-subtitle">Frequently Asked Questions</p>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqOneTitle">
              <a
                href="#faqOneCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">What is Foi app?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqOneCollapse"
              className="collapse"
              aria-labelledby="faqOneTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqTwoTitle">
              <a
                href="#faqTwoCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">Why should I use Foi app?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqTwoCollapse"
              className="collapse"
              aria-labelledby="faqTwoTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqThreeTitle">
              <a
                href="#faqThreeCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">How can I use Foi app?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqThreeCollapse"
              className="collapse"
              aria-labelledby="faqThreeTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqFourTitle">
              <a
                href="#faqFourCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">Who will see my updates?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqFourCollapse"
              className="collapse"
              aria-labelledby="faqFourTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqFiveTitle">
              <a
                href="#faqFiveCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">Can people see my connections?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqFiveCollapse"
              className="collapse"
              aria-labelledby="faqFiveTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="card mb-3 landing-faq-card">
            <div className="card-header bg-white" id="faqSixTitle">
              <a
                href="#faqSixCollapse"
                className="d-flex align-items-center"
                data-toggle="collapse"
              >
                <h6 className="mb-0">Being a user, what all rights I have?</h6>{" "}
                <i className="far fa-plus-square ml-auto" />
              </a>
            </div>
            <div
              id="faqSixCollapse"
              className="collapse"
              aria-labelledby="faqSixTitle"
            >
              <div className="card-body">
                <p className="mb-0 text-gray">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>


  )
}

export default Home
