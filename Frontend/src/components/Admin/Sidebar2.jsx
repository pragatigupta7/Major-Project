import React from 'react'
import "../Admin/Sidebar2.css"
import img from "../Admin/professionalpic.jpg"
import { Link } from 'react-router-dom'

const Sidebar2 = () => {
  return (
    <div>
      <div className="containers">
        <nav className='navv'>
          <ul>
            <div className="sidebar-user">
              <img src={img} alt="" />
              <div>
                <h3>Pragati Gupta</h3>
                <span>abc@gmail.com</span>
              </div>
            </div>

            <li>
              <Link to="/admin/AdminDashboard">
                <i className="fas fa-menorah" />
                <span className="nav-item">Dashboard</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-comment" />
                <span className="nav-item">  Manage User</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-database" />
                <span className="nav-item">ManageCompanyProfiles</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chart-bar" />
                <span className="nav-item"> User Queries</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog" />
                <span className="nav-item">Setting</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <i className="fas fa-sign-out-alt" />
                <span className="nav-item">Log out</span>
              </a>
            </li>
          </ul>
        </nav>
        <section className="mains">
          <div className="mains-top">
            <h1>Welcome to Admin Dashboard</h1>
            {/*}  <i className="fas fa-user-cog" />
    </div>
    <div className="users">
      <div className="card">
        <img src="./pic/img1.jpg" />
        <h4>Sam David</h4>
        <p>Ui designer</p>
        <div className="per">
          <table>
            <tbody>
              <tr>
                <td>
                  <span>85%</span>
                </td>
                <td>
                  <span>87%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Profile</button>
      </div>
      <div className="card">
        <img src="./pic/img2.jpg" />
        <h4>Balbina kherr</h4>
        <p>Progammer</p>
        <div className="per">
          <table>
            <tbody>
              <tr>
                <td>
                  <span>82%</span>
                </td>
                <td>
                  <span>85%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Profile</button>
      </div>
      <div className="card">
        <img src="./pic/img3.jpg" />
        <h4>Badan John</h4>
        <p>tester</p>
        <div className="per">
          <table>
            <tbody>
              <tr>
                <td>
                  <span>94%</span>
                </td>
                <td>
                  <span>92%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Profile</button>
      </div>
      <div className="card">
        <img src="./pic/img4.jpg" />
        <h4>Salina micheal</h4>
        <p>Ui designer</p>
        <div className="per">
          <table>
            <tbody>
              <tr>
                <td>
                  <span>85%</span>
                </td>
                <td>
                  <span>82%</span>
                </td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button>Profile</button>
      </div>
    </div>
    <section className="attendance">
      <div className="attendance-list">
        <h1>Attendance List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Depart</th>
              <th>Date</th>
              <th>Join Time</th>
              <th>Logout Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Sam David</td>
              <td>Design</td>
              <td>03-24-22</td>
              <td>8:00AM</td>
              <td>3:00PM</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr className="active">
              <td>02</td>
              <td>Balbina Kherr</td>
              <td>Coding</td>
              <td>03-24-22</td>
              <td>9:00AM</td>
              <td>4:00PM</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Badan John</td>
              <td>testing</td>
              <td>03-24-22</td>
              <td>8:00AM</td>
              <td>3:00PM</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Sara David</td>
              <td>Design</td>
              <td>03-24-22</td>
              <td>8:00AM</td>
              <td>3:00PM</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            {/* <tr >
              <td>05</td>
              <td>Salina</td>
              <td>Coding</td>
              <td>03-24-22</td>
              <td>9:00AM</td>
              <td>4:00PM</td>
              <td><button>View</button></td>
            </tr>
            <tr >
              <td>06</td>
              <td>Tara Smith</td>
              <td>Testing</td>
              <td>03-24-22</td>
              <td>9:00AM</td>
              <td>4:00PM</td>
              <td><button>View</button></td>
            </tr> 
          </tbody>
        </table>*/}
          </div>
        </section></div></div>

  )
}

export default Sidebar2
