
import React, { useState } from 'react';
import axios from 'axios'            
import { toast } from 'react-toastify'
const URL ="http://localhost:8000/input"



const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    introduction: "",
    eduDetail: ""
  })
  const readData =(event)=>{
    const {name, value} = event.target;
    // console.log('name=',name);
    // console.log('value=',value);
    setUser({...user,[name]:value})

  }
  const submitHandler =(e)=> {
    e.preventDefault(); 
    console.log('data =',user)
    axios.post(`${URL}/`,user).then(res =>{
      toast.success("Information Details Sumbit successfully")
    }).catch(err=> toast.error(err.message))
  }
  const resetData = (e) => {
    e.preventDefault();
    setUser({
      name: "",email: "", mobile:""
    })
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="display-4 text-secondary">Register Here</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit = {(e)=> submitHandler(e)} onReset={(e)=> resetData(e)}>
                 {/* for name */}
                 <div className="form-group mt-2">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name"value={user.name} onChange={(e)=> readData(e)}id="name"  className="form-control" required/>
                </div>
                {/* for introduction */}
                <div className="form-group mt-2">
                  <label htmlFor="intro">Intro</label>
                  <input type="text" name="introduction" value={user.introduction} onChange={(e)=> readData(e)} id="introduction" className="form-control" required/>
                </div>
                {/* for eduDetail details */}
                <div className="form-group mt-2">
                  <label htmlFor="eduDetail">Education Details</label>
                  <input type="text" name="eduDetail" value={user.eduDetail} onChange={(e)=> readData(e)} id="eduDetail" className="form-control" required />
                </div>
                {/* for sumbit button */}
                <div className="form-group mt-2">
                  <input type="submit" value="create" className="btn btn-success"/>
                  <input type="reset" value="Clear" className="btn btn-warning float-end"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register