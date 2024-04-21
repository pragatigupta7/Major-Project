import React from 'react'
import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack'

const Addprofile = () => {
  const Addprofile = useFormik({
    initialValues: {
        name: '',
       email : '',
        companyname: '',
        description: '',
        contactnumber: ''
    },
    onSubmit: async (values, action) => {
        console.log(values);
        const res = await fetch('http://localhost:5000/product/add', {
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
    <><div className="b">
    
     <section className="get-in-touch ">
  <h1 className="title">Add your company Profile</h1>
  
  <form className="contact-form row" onSubmit={Addprofile.handleSubmit}>
  <p className="lead mb-0 text-white text-center">
            Unlock the Power of Your Company's Story: Profiles that Captivate, Connect, and Convert!
          </p>
    <div className="form-field col-lg-6">
      <input
        id="name"
        className="input-text js-input"
        type="text"
        required=""onChange={Addprofile.handleChange} value={Addprofile.values.name}
      />
      <label className="label" htmlFor="name">
        Name
      </label>
    </div>
    <div className="form-field col-lg-6 ">
      <input
        id="email"
        className="input-text js-input"
        type="email"
        required=""onChange={Addprofile.handleChange} value={Addprofile.values.email}
      />
      <label className="label" htmlFor="email">
        E-mail
      </label>
    </div>
    <div className="form-field col-lg-6 ">
      <input
        id="company"
        className="input-text js-input"
        type="text"
        required=""onChange={Addprofile.handleChange} value={Addprofile.values.company}
      />
      <label className="label" htmlFor="company">
        Company Name
      </label>
    </div>
    <div className="form-field col-lg-6 ">
      <input
        id="contactnumber"
        className="input-text js-input"
        type="text"
        required=""onChange={Addprofile.handleChange} value={Addprofile.values.contactnumber}
      />
      <label className="label" htmlFor="phone">
        Contact Number
      </label>
    </div>
    <div className="form-field col-lg-12">
      <input
        id="message"
        className="input-text js-input"
        type="text"
        required=""onChange={Addprofile.handleChange} value={Addprofile.values.message}
      />
      <label className="label" htmlFor="message">
        Description
      </label>
    </div>
    <div className="form-field col-lg-12">
      <input className="submit-btn" type='submit' defaultValue="Submit" />
    </div>
  </form>
</section>

</div>             
    </>

  )
}

export default Addprofile
