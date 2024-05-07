
import React,{useState,useEffect} from 'react'

const Manageuser = () => {
  const [Data,setData]=useState([])
    const fetchUserData = async()=>{
        const res = await fetch('http://localhost:5000/user/getall',)
        console.log(res.status)
        if(res.status===200){
            const data = await res.json()
            console.log(data)
            setData(data)
        }
    }
    useEffect(()=>{
        fetchUserData()
    },[])
    const displayUsers =()=>{
        return Data.map((user)=>{
        return <tr>
            
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.confirmpassword}</td>
            <td><button className='btn btn-danger'>Delete</button></td>
            <td><button className='btn btn-danger'>Update</button></td>
            </tr>
        })
    }
  return (
    <>
      <div className="container"style={{margin:'10%',marginLeft:'20%',height:'500px'}}>
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <div className="panel">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title">
                      Manage<span>User</span>
                    </h4>
                  </div>
                  <div className="col-sm-9 col-xs-12 text-right">
                    <div className="btn_group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Confirm Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayUsers()}
                    </tbody></table></div></div></div></div></div>
                   
                  
   </>

  )
}

export default Manageuser
