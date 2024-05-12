import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar2 from './Sidebar2'

const Admin = () => {
  return (
    <>
   
      <Sidebar2/>
   
     <div style={{marginLeft:"100px"}}>
    <Outlet />   </div>                  
    </>
  )
}

export default Admin