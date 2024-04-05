import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home' 
import Signup from './components/Signup' 
import Login from './components/Login' 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/> 
       <Route path='Home' element={<Home/>}/> 
       <Route path='Signup' element={<Signup/>}/>
       <Route path='Login' element={<Login/>}/>
        
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
