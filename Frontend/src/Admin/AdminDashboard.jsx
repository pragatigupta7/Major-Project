import React from 'react'
import '../Admin/Admin.css'
import logo from "../assets/Logo-removebg-preview.png"
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <>
  <nav
    className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white"
    id="sidenav-main"
  >
    <div className="scrollbar-inner">
     
      <div className="sidenav-header  align-items-center">
        <Link className="navbar-brand" href="javascript:void(0)">
          <img
            src={logo}
            className="navbar-brand-img"
            alt="..."
          />
        </Link>
      </div>
      <div className="navbar-inner">
       
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
         
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="examples/dashboard.html">
                <i className="ni ni-tv-2 text-primary" />
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/icons.html">
                <i className="ni ni-planet text-orange" />
                <span className="nav-link-text">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/map.html">
                <i className="ni ni-pin-3 text-primary" />
                <span className="nav-link-text">Google</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/profile.html">
                <i className="ni ni-single-02 text-yellow" />
                <span className="nav-link-text">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/tables.html">
                <i className="ni ni-bullet-list-67 text-default" />
                <span className="nav-link-text">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/login.html">
                <i className="ni ni-key-25 text-info" />
                <span className="nav-link-text">Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/register.html">
                <i className="ni ni-circle-08 text-pink" />
                <span className="nav-link-text">Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="examples/upgrade.html">
                <i className="ni ni-send text-dark" />
                <span className="nav-link-text">Upgrade</span>
              </a>
            </li>
          </ul>
          
         
         
       
        </div>
  </div>
    </div>
  </nav>
  
  <div className="main-content" id="panel">
    
   <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form
            className="navbar-search navbar-search-light form-inline mr-sm-3"
            id="navbar-search-main">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative input-group-merge">
                <div className="input-group-prepend">
                  {/*<span className="input-group-text">
                    <i className="fas fa-search" />
</span>*/}
                </div>
                {/*<input
                  className="form-control"
                  placeholder="Search"
type="text"/>*/}
              </div>
            </div>
            <button
              type="button"
              className="close"
              data-action="search-close"
              data-target="#navbar-search-main"
              aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
</form>
         
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
            
              <div
                className="pr-3 sidenav-toggler sidenav-toggler-dark"
                data-action="sidenav-pin"
                data-target="#sidenav-main"
              >
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </div>
            </li>
            <li className="nav-item d-sm-none">
              <a
                className="nav-link"
                href="#"
                data-action="search-show"
                data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ni ni-bell-55" />
              </a>
              <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
              
                <div className="px-3 py-3">
                  <h6 className="text-sm text-muted m-0">
                    You have <strong className="text-primary">13</strong>{" "}
                    notifications.
                  </h6>
                </div>
           
                <div className="list-group list-group-flush">
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto">
                        
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/team-1.jpg"
                          className="avatar rounded-circle"
                        />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">
                          Let's meet at Starbucks at 11:30. Wdyt?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto">
                        
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/team-2.jpg"
                          className="avatar rounded-circle"
                        />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">
                          A new issue has been reported for Argon.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto">
                     
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/team-3.jpg"
                          className="avatar rounded-circle"
                        />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>5 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">
                          Your posts have been liked a lot.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto">
                       
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/team-4.jpg"
                          className="avatar rounded-circle"
                        />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">
                          Let's meet at Starbucks at 11:30. Wdyt?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action"
                  >
                    <div className="row align-items-center">
                      <div className="col-auto">
                     
                        <img
                          alt="Image placeholder"
                          src="assets/img/theme/team-5.jpg"
                          className="avatar rounded-circle"
                        />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">
                          A new issue has been reported for Argon.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <a
                  href="#!"
                  className="dropdown-item text-center text-primary font-weight-bold py-3"
                >
                  View all
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ni ni-ungroup" />
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                <div className="row shortcuts px-4">
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i className="ni ni-calendar-grid-58" />
                    </span>
                    <small>Calendar</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i className="ni ni-email-83" />
                    </span>
                    <small>Email</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i className="ni ni-credit-card" />
                    </span>
                    <small>Payments</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i className="ni ni-books" />
                    </span>
                    <small>Reports</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i className="ni ni-pin-3" />
                    </span>
                    <small>Maps</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i className="ni ni-basket" />
                    </span>
                    <small>Shop</small>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item dropdown">
              <a
                className="nav-link pr-0"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="assets/img/theme/team-4.jpg"
                    />
                  </span>
                  <div className="media-body  ml-2  d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">
                      John Snow
                    </span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu  dropdown-menu-right ">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </a>
                <div className="dropdown-divider" />
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
              <nav
                aria-label="breadcrumb"
                className="d-none d-md-inline-block ml-md-4"
              >
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="fas fa-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Dashboards</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Default
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <a href="#" className="btn btn-sm btn-neutral">
                New
              </a>
              <a href="#" className="btn btn-sm btn-neutral">
                Filters
              </a>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </>

          
            )
          }
       
 



export default AdminDashboard
