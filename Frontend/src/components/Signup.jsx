import React from 'react'
import header from '../assets/Register.png'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {enqueueSnackbar} from 'notistack'

const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .required('Email is required')
  .email('Email is invalid'),
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters'),
  confirmpassword: Yup.string()
  .required('Confirm Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be at most 15 characters')
})


const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: ''
    },
    onSubmit:async(values,action)=>{
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if(res.status===200){
        enqueueSnackbar('Signup successful',{variant:'success'})
    }else{
      enqueueSnackbar('Signup failed',{variant:'error'})
    }
    },
    validationSchema: SignupSchema
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
                    <h2 className="auth-section-title">Create account</h2>
                    <p className="auth-section-subtitle">
                      Create your account to continue.
                    </p>
                    <form action="" onSubmit={signupForm.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email<sup>*</sup></label>
                        <span style={{color: 'red', fontSize:'10'}}>{signupForm.touched.email && signupForm.errors.email}</span>
                        <input type="email" className="form-control" id="email"name="email" placeholder="Email" 
                        onChange={signupForm.handleChange}
                        value = {signupForm.values.email}/>
                        </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          Password <sup>*</sup></label>
                        <span style={{color: 'red', fontSize:'10'}}>{signupForm.touched.password && signupForm.errors.password}</span>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" 
                          onChange={signupForm.handleChange}
                          value = {signupForm.values.password}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">
                          Confirm Password <sup>*</sup>
                        </label>
                        <span style={{color: 'red', fontSize:'10'}}>{signupForm.touched.confirmpassword && signupForm.errors.confirmpassword}</span>
                        <input type="password"className="form-control"id="confirmpassword"name="confirmpassword" placeholder="Confirm Password" 
                          onChange={signupForm.handleChange}
                          value = {signupForm.values.confirmpassword} />
                      </div>
                      <button
                        className="btn btn-primary btn-auth-submit" type='submit'> Create account </button>
                      </form>
                    <p className="mb-0">
                      <Link to="/Login" className="text-dark font-weight-bold">
                        Already have an acocunt? Sign in
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <img src={header} alt="login" />
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

export default Signup
