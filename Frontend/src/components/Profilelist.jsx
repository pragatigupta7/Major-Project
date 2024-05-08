import React,{useState, useEffect} from 'react'


import { Link } from 'react-router-dom'

const Profilelist = () => {
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
            <div className="main">                     
   <section className="light">
        <div className="container py-2" >
            
            <div className="h1 text-center text-white" id="pageHeaderTitle">
            {item.name}
            </div>
            <article className="postcard light blue" >
                <Link className="postcard__img_link" to="/view/ + item._id">
                    <img   src={"http://localhost:5000/"+item.image } alt="img"  style={{width:'500px',height:'400px'}}/>
                </Link>
                <div className="postcard__text t-white">
                    <h1 className="postcard__title blue">
                        <Link to="#">{item.name}</Link>
                    </h1>
                    <div className="postcard__subtitle small t-white">
                    <h1> 
                    {item.companyname}</h1>
                    </div>
                    <div className="postcard__bar" />
                    <div className="postcard__preview-txt t-white">
                    {item.description}
                    </div>
                    <ul className="postcard__tagbox t-white">
                        <li className="tag__item">
                        <i className="fa-solid fa-envelope t-dark"></i>
                            {item.email}
                        </li>
                        <li className="tag__item t-white">
                        <i className="fa-solid fa-phone t-dark"></i>
                            {item.contactnumber}
                        </li>
                       
                    </ul>
                </div>
            </article>
       </div>
       </section>
       </div>  
    ))
}  

return (
        
<div className='head' >
      <header className='bg-body-tertiary'  style={{fontSize:'50px',fontFamily:'cursive'}}>
        <div className='container '>
            <h1 className="h1 text-center" id="pageHeaderTitle" style={{color:'black',fontFamily:'fantasy',marginTop:'1px'}}>
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
   
      <div className="contain mt-5">
        <div className="row mt-5 p-5">
        {displayProfile()}
        </div>
      </div>
    </div>
  

)
  
}
export default Profilelist
