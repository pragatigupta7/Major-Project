import React, { useState, useEffect } from 'react'
import './List.css'
import company from '../assets/companybg.jpeg'
import { Link } from 'react-router-dom'

const List = () => {
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
      return profiles.map((item) => (
        <div className='boddy'>
        <div className="cardss-hover">
            <div className="cardss-hover__content">
                <h3 className="cardss-hover__title">
                {item.companyname}<span>{item.name}</span> right now!
                </h3>
                <p className="cardss-hover__text">
                {item.description}
                </p>
                <Link to={"/view/" + item._id} className="cardss-hover__link">
                    <span>Learn How</span>
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </Link>
            </div>
            <div className="cardss-hover__extra">
                <h4>
                   Email<span>   {item.email}</span> and Phone no. <span>  {item.contactnumber}</span>
                </h4>
            </div>
            <img src={company} alt="logo" className="img-fluid"
            width="492px" />
        </div>

    </div>
    ))
    }
    return (

        <div
  style={{
    background:
      "url(https://img.freepik.com/premium-photo/purple-texture-high-quality_670382-120715.jpg)",height:'300px',width:'100%'
  }}
  className="jumbotron bg-cover text-white">
  <div className="container py-1 text-center">
    <h1 className="display-4 font-weight-bold ">All Company Profiles</h1>
    <p className="font-italic mb-0">
      Using simple jumbotron-style component, create a nice Bootstrap 4 header
      with a background image.
    </p>
    <p className="font-italic">
      Snippe by
      <Link to="#" className="text-white">
        <u>Bootstrapious</u>
      </Link>
    </p>
    <a href="#" role="button" className="btn btn-primary px-5">
      See All Features
    </a>
  </div>


        <div className="container">
        <div className="row">
          {displayProfile()}
        </div>
      </div>
    </div>
    )
}

export default List
