import React from 'react'
import icon4 from '../assets/icon-4.png'
import icon5 from '../assets/icon-5.png'
import insta from '../assets/instagram.svg'
import fb from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const Contactschema = Yup.object().shape({
  name: Yup.string()
    .required('Name id required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  phone: Yup.string()
    .required('Phonenumber is required'),
  message: Yup.string()
    .required('Message is Required')
    .min(3, 'Message must be  at least 8 characters')
    .max(100, 'Message must be at most 15 characters'),
  subject: Yup.string()
    .required('subject is required')
})

const Contact = () => {
  //step1: Formik initilization
  const Contactform = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    },
    //step5: validation schema
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200) {
        enqueueSnackbar('Thank you', { variant: 'success' })
      } else {
        enqueueSnackbar('uppsss', { variant: 'error' })
      }
    },
    validationSchema: Contactschema
  })
  return (
    <>
      <main>
        <div className="container">
          <section className="page-header">
            <h2>Tell us about yourself</h2>
            <h5>
              Whether you have questions or you would just like to say hello,
              contact us.
            </h5>
          </section>
          <section className="contact-content">
            <div className="contact-widget media">
              <img src={icon4} alt="monitor" width="50px" />
              <div className="media-body">
                <h6 className="widget-title">Production Office</h6>
                <p className="widget-content">hello@youriste.com</p>
              </div>
            </div>
            <div className="contact-widget media">
              <img src={icon5} alt="book" width="40px" />
              <div className="media-body">
                <h6 className="widget-title">Administration Office</h6>
                <p className="widget-content">hello@youriste.com</p>
              </div>
            </div>
          </section>
          <section className="contact-form-wrapper">
            <form action="" onSubmit={Contactform.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">
                    YOUR NAME <sup>*</sup>
                  </label>
                  <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.name && Contactform.errors.name}</span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name *" onChange={Contactform.handleChange}
                    value={Contactform.values.name}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">
                    YOUR EMAIL ADDRESS <sup>*</sup>
                  </label>
                  <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.email && Contactform.errors.email}</span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="feeney.matteo@schmeler.com" onChange={Contactform.handleChange}
                    value={Contactform.values.email}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="subject">
                    SUBJECT <sup>*</sup>
                  </label>
                  <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.subject && Contactform.errors.subject}</span>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Development"
                    onChange={Contactform.handleChange}
                    value={Contactform.values.subject}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="phone">
                    YOUR PHONE NUMBER <sup>*</sup>
                  </label>
                  <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.phone && Contactform.errors.phone}</span>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="635-396-9570"
                    onChange={Contactform.handleChange}
                    value={Contactform.values.phone}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="message">
                    HOW CAN WE HELP YOU? <sup>*</sup>
                  </label>
                  <span style={{ color: 'red', fontSize: '10' }}>{Contactform.touched.message && Contactform.errors.message}</span>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={7}
                    placeholder="Hi there, I would like to ..."
                    defaultValue={""} onChange={Contactform.handleChange}
                    value={Contactform.values.message}
                  />
                </div>
              </div>
              <div className="text-center">
                <button type='submit' className="btn btn-primary mb-4">
                  Submit
                </button>
                <p className="form-footer-text">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>

  )
}

export default Contact
