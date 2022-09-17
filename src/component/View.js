
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const URL = 'http://localhost:8000/output'

const View = () => {
  const [user, setUsers] =useState([])
  useEffect(() =>{
    axios.get(`${URL}/`)
    .then(res=>{
      console.log('server data =',res.data)
      setUsers(res.data)
    })
    .catch(err=> toast.error(err.message))
  },[])
  return (
    <>
      <div className="container">
        <div clasName="row">
          <div className="col-md-12 text-center">
            <h4 className="display-3 text-secondary">View Details</h4>
          </div>
        </div>
        <div className="row">
          {
            user.map((item,key)=>{
              return(
                <div className="col-md-4 " key={key}>
                  <div className="card-header">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>introduction</strong>
                      <span className='float-end'>{item.introduction}</span>
                    </p>
                    <p>
                      <strong>Education</strong>
                      <span className='float-end'>{item.eduDetail}</span>
                    </p>
                  </div>
                  <div className="card-body"></div>

                </div>

              )
            })
          }
        </div>
      </div>
     
    </>
  );
};

export default View;
