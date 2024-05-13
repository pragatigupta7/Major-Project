import React from 'react'
import login from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import useUserContext from '../UserContext'   //for change in login button into logout button
import { enqueueSnackbar } from 'notistack';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
  .required('Email is required')
  .email('Email is invalid'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters')
})
const Login = () => {
  const Navigate = useNavigate();
//logout
const{setLoggedIn} = useUserContext();
  //logout
  // step 1: formik initialization
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit:async(values,action)=>{
        console.log(values);
        const res =await fetch('http://localhost:5000/user/authenticate',{
          method:'POST',
          body:JSON.stringify(values),
          headers:{
            'Content-Type':'application/json'
          }
        });
        console.log(res.status)
        action.resetForm()
  
        if(res.status===200){
          enqueueSnackbar('Login successful',{variant:'success'})
          Navigate('/EditPage')
          
      
      }setLoggedIn(true);
      const data = await res.json();
      console.log(data);  //to save user data in sesson ,inbuilt api-sessionstorage
      sessionStorage.setItem('user',JSON.stringify(data))
      },
    
      validationSchema: LoginSchema
  })
  return (
    <>
  <main className="page-auth">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <section className="auth-wrapper">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="auth-section-title">Log In</h2>
                <p className="auth-section-subtitle">
                  Sign in to your account to continue.
                </p>
                <form action=""  onSubmit={loginForm.handleSubmit}>
                  <div className="form-group">
                  <span style={{color: 'red', fontSize:'10'}}>{loginForm.touched.email && loginForm.errors.email}</span>
                    <label htmlFor="email">
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email *" onChange={loginForm.handleChange}
                      value = {loginForm.values.email}/>
                  </div>
                  <div className="form-group">
                  <span style={{color: 'red', fontSize:'10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
                    <label htmlFor="password">
                      Password <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Password *" onChange={loginForm.handleChange}
                      value = {loginForm.values.password}/>
                  </div>
                  <div className="form-actions-wrapper d-flex flex-wrap align-items-center justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"defaultValue="" id="keepLogin"/>
                      <label className="form-check-label" htmlFor="keepLogin"> keep me login </label>
                    </div>
                    <Link to="/Forgetpassword" className="forgot-password-link">
                      Forgot password?
                    </Link>
                  </div>
                  <button className="btn btn-primary btn-auth-submit"
                    type='submit'>Submit </button>
                </form>
                <p className="mb-0">
                  <Link to="/Signup"
                    className="text-dark font-weight-bold">New User? Sign Up</Link>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center">
              <img src={login} alt="logo" className="img-fluid"/>   
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</>

  )
}

export default Login


