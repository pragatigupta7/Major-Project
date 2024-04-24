import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'

const Addprofile = () => {
  const Addprofile = useFormik({
    initialValues: {
      name: '',
      email: '',
      companyname: '',
      description: '',
      contactnumber: ''
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/addprofile/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()
      if (res.status === 200) {
        enqueueSnackbar('Addprofile successful', { variant: 'success' })
      } else {
        enqueueSnackbar('Addprofile failed', { variant: 'error' })
      }
    },


  })
  return (
      <>
        {/* Section: Design Block */}
        <section className="background-radial-gradient overflow-hidden">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n .background-radial-gradient {\n  background-color: hsl(218, 41%, 15%);\n  background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
            }}
          />
          <div className="container px-5 py-5 px-md-5 text-center text-lg-start my-1" style={{margin:"10%"}}>
            <div className="row gx-lg-5 align-items-center mb-5" style={{justifyContent:"space-between"}}>
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-5 fw-bold ls-tight" 
                  style={{ color: "hsl(218, 81%, 95%)",fontSize:"55px" }}>
                  Add your company  <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    Profile
                  </span>
                </h1>
                <p
                  className="mb-5 opacity-80"
                  style={{ color: "hsl(218, 81%, 85%)" }}>
                   Unlock the Power of Your Company's Story:
           Profiles that Captivate, Connect, and Convert!
                </p>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong" />
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong" />
                <div className="card bg-glass" style={{border:"1px solid white"}}>
                  <div className="card-body px-4 py-5 px-md-5">
                    <form  onSubmit={Addprofile.handleSubmit} >
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div className="row" >
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="text"
                              id="name"
                              className="form-control"onChange={Addprofile.handleChange} value={Addprofile.values.name}/>
                            <label className="form-label" htmlFor="form3Example1">
                              Name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              type="email"
                              id="email"
                              className="form-control"onChange={Addprofile.handleChange} value={Addprofile.values.email}
                            />
                            <label className="form-label" htmlFor="form3Example2">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Email input */}
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="text"
                          id="companyname"
                          className="form-control"onChange={Addprofile.handleChange} value={Addprofile.values.companyname}/>
                        <label className="form-label" htmlFor="form3Example3">
                          Company Name
                        </label>
                      </div>
                      {/* Password input */}
                      <div data-mdb-input-init="" className="form-outline mb-4">
                        <input
                          type="text"
                          id="contactnumber"
                          className="form-control"onChange={Addprofile.handleChange} value={Addprofile.values.contactnumber}/>
                        <label className="form-label" htmlFor="form3Example4">
                         Contact Number
                        </label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check justify-content-center mb-4"> 
                      <input
                          type="text"
                          id="description"
                          className="form-control"onChange={Addprofile.handleChange} value={Addprofile.values.description}/>
                       <label className="form-label" htmlFor="form3Example4">
                         Description
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type='submit'
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-primary btn-block mb-4">
                       Done
                      </button>
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </>













  


























  )
}

export default Addprofile
