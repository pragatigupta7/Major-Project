import React,{useState, useEffect}from 'react'

import { Link, useParams } from 'react-router-dom'

const IT = () => {
    const [profiles,setProfile] = useState([])

    const { category } = useParams([]);

    const fetchaddprofile = async()=>{
        const res = await fetch('http://localhost:5000/addprofile/getbycategory/IT')
        console.log(res.status)
        if(res.status===200){
            const data = await res.json();
            console.log(data)
            if(category){
              setProfile(data.filter((ser) => ser.category === category));
            } else{
              setProfile(data)

            }
        }
    }
    useEffect(()=>{
        fetchaddprofile()
    },[]);
    const displayProfile = ()=>{
        return profiles.map((item) => (
            <div className="card-list" style={{display:'flex',flexDirection:"column",width:'400px',height:'300px'}}>
            <Link to={"/view/"+ item._id} className="card-item">
            <img   src={"http://localhost:5000/"+item.image } alt="img"  />
              <span className="developer">  {item.name}</span>
              <br />
              <span className="developer"> {item.companyname} </span>
              <h3> {item.description}</h3>
           
              <ul className="postcard__tagbox ">
                        <li className="tag__item">
                        <i className="fa-solid fa-envelope t-dark"></i>
                            {item.email}
                        </li>
                        <li className="tag__item ">
                        <i className="fa-solid fa-phone t-dark"></i>
                            {item.contactnumber}
                        </li>

                       
                    </ul>
                    {/* <Link to={"/View2/" + item._id} >Know More</Link> */}
            </Link>
           {/*} <a href="#" className="card-item">
              <img src="images/designer.jpg" alt="Card Image" />
              <span className="designer">Designer</span>
              <h3>A "designer" is a design expert.</h3>
              <div className="arrow">
                <i className="fas fa-arrow-right card-icon" />
              </div>
        </a>*/}
           {/*} <a href="#" className="card-item">
              <img src="images/editor.jpg" alt="Card Image" />
              <span className="editor">Editor</span>
              <h3>An "editor" ensures content quality and accuracy.</h3>
              <div className="arrow">
                <i className="fas fa-arrow-right card-icon" />
              </div>
    </a>*/}
          </div>
          
        ))}

    
  return (
    <div className='headd' >
    <header className='bg-body-tertiary'  style={{fontSize:'50px',fontFamily:'cursive'}}>
      <div className='container 'id='h'>
          <h1 className="h1 text-center" id="pageHeaderTitle" style={{color:'white',fontFamily:'fantasy',marginTop:'1px'}}>
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
          className="form-control" />
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
 
    <div className="contain mt-2">
      <div className="row mt-2 p-2">
      {displayProfile()}
      </div>
    </div>
  </div>

  )
}

export default IT
