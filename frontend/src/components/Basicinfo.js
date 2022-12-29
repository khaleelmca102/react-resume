import React, { useEffect, useRef, useState } from 'react'
import Api from '../Api'; 

const Basicinfo = () => {
  const {http, user} = Api();
  const fullnameRef = useRef();
  const phoneRef = useRef();

  const errRef = useRef();
  
  const [user_id, setUserId] = useState(user.user_id);
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fullnameRef.current.focus();
    fetchData()
  },[])
  
  useEffect(() => {
    setErrMsg('');
  },[fullname, phoneRef])

  const fetchData = () => {
    http.get('/basicinfo/',{params:{user_id: user_id}}).then((res)=>{
      setFullName(res.data.full_name);
      setPhoneNumber(res.data.phone_number);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setSuccess(true);
  }

  const saveBasicInfo = () => {
    http.post('/basicinfo',{user_id:user_id,full_name:fullname,phone_number:phonenumber}).then((res)=>{
      //setSuccess(true);
    }); 
  }
   
  return (

    <section>
      <p ref={errRef} className={errMsg ? "error" : ""} aria-live="assertive">
      {errMsg}
      </p>
      <h1> Personal Deatils </h1>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col'>
            <label htmlFor="fullname">Full Name</label>
            <input 
              type="text" 
              id="fullname" 
              ref={fullnameRef}
              autoComplete="off"
              onChange={(e) => setFullName(e.target.value)}
              value = {fullname}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="phonenumber">Phone Number</label>
            <input 
              type="text" 
              id="phonenumber" 
              ref={phoneRef}
              autoComplete="off"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value = {phonenumber}
              required
            />
          </div>          
        </div>
        <br/>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <button type="button" className="btn btn-success" onClick={saveBasicInfo}>Save</button>
          </div>
        </div>
      </form>   
    </section>
  )
}

export default Basicinfo