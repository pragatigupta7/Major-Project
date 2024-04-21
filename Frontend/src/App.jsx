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
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
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


       </Routes>
       <Footer/>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App
