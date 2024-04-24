import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Profilelisting = () => {
    const [profiles,setProfile] = useState([])

    const fetchaddprofile = async()=>{
        const res = await fetch('http://localhost:5000/addprofile/getall')
        console.log(res.status)
        if(res.status===200){
            const data = await res.json();
            console.log(data)
            setProfile(data)
        }
    }
    useEffect(()=>{
        fetchaddprofile()
    },[]);
    const displayProfile = ()=>{
        return profiles.map((item) => (
        <div className="bbb"  >
          <div className="container">
       <section className="mx-auto my-5" style={{ maxWidth: '50rem'}}>
    <div className="card">
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="light"
      >
        <img
          src="https://th.bing.com/th?id=OIP.EuZQ185l0JM20rm3ck9mcQHaD_&w=340&h=183&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          className="img-fluid"
        />
        <Link to="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          />
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">
        {item.name}
        </h5>
        <p className="mb-2">{item.companyname}</p>
        <p className="card-text">
        {item.description}
        </p>
        <hr className="my-4" />
        <p className="lead">
          <strong>{item.email}</strong>
        </p>
        <p className='lead'>{item.contactnumber}</p>
        
        
      </div>
    </div>
  </section>
</div>
</div>  
 ))
}     
        {/* <div className="container ">
                <div className="com-md-4">
                    <div className="card p-3 mb-5 bg-dark ">
                        <h3 className='mt-3 text-light'>{item.name}</h3>
                        <h5 className='mt-3 text-light'>{item.email}</h5>
                        <p className='mt-3 text-light'>{item.companyname}</p>
                        <p className='mt-3 text-light'>{item.contactnumber}</p>
                        <p className='mt-3 text-light'>{item.description}</p>
                    </div>
                </div>
        </div>*/}
             
  return (
    <div>
      <header className='bg-body-tertiary'>
        <div className='container py-5'>
            <p className='text-center fw-bold'>All Products</p>
            <input type='text' placeholder='Search product' className='form-control w-75 m-auto'/>
        </div>
      </header>
      <div className="container mt-5">
        <div className="row mt-5 p-5">
        {displayProfile()}
        </div>
      </div>
    </div>
  )
  
}

export default Profilelisting
