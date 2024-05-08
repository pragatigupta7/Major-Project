import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home' 
import Signup from './components/Signup' 
import Login from './components/Login' 
import './App.css'
import Contact from './components/Contact'
import About from './components/About'
import Features from './components/Features'
import Addprofile from './components/Addprofile'
import Navbar from './components/Navbar'
import { SnackbarProvider } from 'notistack'
import Arsha from './components/Arsha'
import Profilelisting from './components/Profilelisting'
import Profile2 from './components/Profile2'
import { UserProvider } from '../src/UserContext'
import Manageuser from './components/Manageuser'
import Update from './components/Update'
import Error from './components/404'
import Profilelist from './components/Profilelist'
import Profilelistt from './components/Profilelistt'
import ProfileEditing from './Admin/ProfileEditing'
import AdminDashboard from './Admin/AdminDashboard'
import Admin from '../src/Admin/AdminDashboard'
import ForgetPassword from './components/Forgetpassword'

import View from './components/view'
import Digitalmarketing from './components/Digitalmarketing'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <UserProvider>
    {/*<Navbar/>*/}
      <Routes>
      <Route path='/' element={<Home/>}/> 
       <Route path='/Home' element={<Home/>}/> 
       <Route path='/Navbar' element={<Navbar/>}/> 
       <Route path='/Signup' element={<Signup/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Features' element={<Features/>}/>
       <Route path='/Addprofile' element={<Addprofile/>}/>
       <Route path='/Arsha' element={<Arsha/>}/>
       <Route path='/Profilelisting' element={<Profilelisting/>}/>
       <Route path='/Profile2' element={<Profile2/>}/>
       <Route path='/Manageuser' element={<Manageuser/>}/>
       <Route path='/Update/:id' element={<Update/>}/>
       <Route path='/404' element={<Error/>}/>
       <Route path='/Profilelist' element={<Profilelist/>}/>
       <Route path='/Profilelistt' element={<Profilelistt/>}/>
       <Route path="Forgetpassword" element={<ForgetPassword />} />
       <Route path="Digitalmarketing" element={<Digitalmarketing />} />
       
       <Route path='/View/:id' element={<View/>} />

       <Route path="/Admin" element={<Admin/>}>
        <Route path="ProfileEditing" element={<ProfileEditing />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
     

       </Route>
       


       </Routes>
       </UserProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
