import React from 'react'
import { Link } from 'react-router-dom'

const Profile2 = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        {" "}
                        <i className="fa fa-snowflake-o fa-lg text-primary mr-2" />
                        <strong>Snowflake</strong>
                    </a>
                    <button
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#" className="nav-link font-italic">
                                    {" "}
                                    Home{" "}
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="#" className="nav-link font-italic">
                                    {" "}
                                    About{" "}
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="#" className="nav-link font-italic">
                                    {" "}
                                    Services{" "}
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="#" className="nav-link font-italic">
                                    {" "}
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-light">
                <div className="container py-5">
                    <div className="row h-100 align-items-center py-5">
                        <div className="col-lg-6">
                            <h1 className="display-4">Welcome to Snowflake, where creativity thrives and dreams take flight.</h1>
                            <p className="lead text-muted mb-0">
                            Elevating Experiences, Empowering Connections
                            </p>
                          {/*}  <p className="lead text-muted">
                                Snippet by{" "}
                                <Link to="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=1060&t=st=1714057553~exp=1714058153~hmac=987af5e20892c408ee0bbb46cd32b7ac22ec44935418b0589cca9fc93ba86a5f" className="text-muted">
                                    <u>Bootstrapious</u>
    </Link>
                            </p>*/}
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=1060&t=st=1714057553~exp=1714058153~hmac=987af5e20892c408ee0bbb46cd32b7ac22ec44935418b0589cca9fc93ba86a5f" alt='img' style={{width:'600px'}} />
                           
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Link to="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                Learn More
                            </Link>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                                alt=""
                                className="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 px-5 mx-auto">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                                alt=""
                                className="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                        <div className="col-lg-6">
                            <i className="fa fa-leaf fa-2x mb-3 text-primary" /><h1>Features</h1>
                            <h2 className="font-weight-light">Unlocking Possibilities, One Feature at a Time</h2>
                            <p className="font-italic text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-lg-5">
                            <h2 className="display-4 font-weight-light">Our team</h2>
                            <p className="font-italic text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="row text-center">
                        {/* Team item*/}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                                    alt=""
                                    width={100}
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 className="mb-0">Manuella Nevoresky</h5>
                                <span className="small text-uppercase text-muted">
                                    CEO - Founder
                                </span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End*/}
                        {/* Team item*/}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                                    alt=""
                                    width={100}
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 className="mb-0">Samuel Hardy</h5>
                                <span className="small text-uppercase text-muted">
                                    CEO - Founder
                                </span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End*/}
                        {/* Team item*/}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                                    alt=""
                                    width={100}
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 className="mb-0">Tom Sunderland</h5>
                                <span className="small text-uppercase text-muted">
                                    CEO - Founder
                                </span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End*/}
                        {/* Team item*/}
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                                    alt=""
                                    width={100}
                                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 className="mb-0">John Tarly</h5>
                                <span className="small text-uppercase text-muted">
                                    CEO - Founder
                                </span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="social-link">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End*/}
                    </div>
                </div>
            </div>
            <footer className="bg-light pb-5">
                <div className="container text-center">
                    <p className="font-italic text-muted mb-0">
                        © Copyrights Company.com All rights reserved.
                    </p>
                </div>
            </footer>
        </>

    )
}

export default Profile2
