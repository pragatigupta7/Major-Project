import React, { useState, useEffect } from 'react'
// import "../components/Listing.css"
import './Listing.css'
import { Link } from 'react-router-dom'
const Listing = () => {
  const [profiles, setProfile] = useState([])

  const fetchaddprofile = async () => {
    const res = await fetch('http://localhost:5000/addprofile/getall')
    console.log(res.status)
    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      setProfile(data)
    }
  }
  useEffect(() => {
    fetchaddprofile()
  }, []);
  const displayProfile = () => {
    return profiles.map((pro) => (
      <div className="col-md-4">
      <div class="ag-format-container">
          <div class="ag-courses_box">
              <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                      <div class="ag-courses-item_bg"></div>

                      <div class="ag-courses-item_title">
                          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                      </div>

                      <div class="ag-courses-item_date-box">
                          Start:
                          <span class="ag-courses-item_date">
                              04.11.2022
                          </span>
                      </div>
                  </a>
              </div>
          </div>
      </div>
      </div>
  ))
  }

  return (

    <div className='head' >
      <header className='bg-body-tertiary' style={{ fontSize: '50px', fontFamily: 'cursive' }}>
        <div className='container '>
          <h1 className="h1 text-center" id="pageHeaderTitle" style={{ color: 'black', fontFamily: 'fantasy', marginTop: '0px' }}>
            All Company Profiles
          </h1>
          <div className="row mb-3">
            <div className="col-lg-12 mx-auto">
              <h5 className="font-weight-light mb-4 font-italic text-white">

              </h5>
              <div className="bg-white p-5 rounded shadow">
                <form action="">
                  <div className="input-group mb-4">
                    <input
                      type="search"
                      placeholder="What're you searching for?"
                      aria-describedby="button-addon5"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <button
                        id="button-addon5"
                        type="submit"
                        className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          {displayProfile()}
        </div>
      </div>
    </div>

  )
}

export default Listing
