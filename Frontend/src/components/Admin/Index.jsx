import React from 'react'
import { Outlet } from 'react-router-dom'
import './Sidebar2.css'
import img from "../Admin/professionalpic.jpg"
import { Link } from 'react-router-dom'



const Admin = () => {
  return (
    <>

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
                <span className="navv-item">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/Admin/Manageuser">
                <i className="fas fa-comment" />
                <span className="navv-item">  Manage User</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-database" />
                <span className="navv-item">ManageCompanyProfiles</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-chart-bar" />
                <span className="navv-item"> User Queries</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-cog" />
                <span className="navv-item">Setting</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="logout">
                <i className="fas fa-sign-out-alt" />
                <span className="navv-item">Log out</span>
              </Link>
            </li>
          </ul>
        </nav>
        
            
  
               <div class="main-body">
        
            <div><Outlet /></div>
          </div>
          </div>
          </div>


   
                 
    </>
  )
}

export default Admin