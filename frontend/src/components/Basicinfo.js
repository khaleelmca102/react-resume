import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Api from '../Api'; 

//const Basicinfo = () => {
function Basicinfo({basicToHome, showLoader}) {
  const {http, user, token, logout} = Api();
  const inputRef = useRef([]);
  const errRef = useRef();  

  const inputValues = {
    user_id:user.user_id,
    fullname:'',
    phonenumber:'',
    emailid:'',
    profiletitle:'',
    state:'',
    city:'',
    zipcode:'',
    profiledescription:'',
  }

  const [inputs, setInputs] = useState(inputValues);

  const [errMsg, setErrMsg] = useState('');
  const [basicSuccess, setBasicSuccess] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {   
    fetchData(); 
    showLoader(false);
  },[]);

  const fetchData = () => {  
    showLoader(true);
    http.get('/basicinfo/',{params:{user_id: inputs.user_id}}).then((res)=>{     
      setInputs({
        user_id:inputs.user_id,
        fullname:res.data.full_name,
        phonenumber:res.data.phone_number,
        emailid:res.data.email_id,
        profiletitle:res.data.profile_title,
        state:res.data.state,
        city:res.data.city,
        zipcode:res.data.zipcode,
        profiledescription:res.data.profile_description,
      });
      inputRef.current['fullname'].focus();
      // inputRef.current['phonenumber'].value = inputs.phonenumber;
      // inputRef.current['fullname'].value = inputs.fullname;
      // inputRef.current['emailid'].value = inputs.emailid;
      // inputRef.current['profiletitle'].value = inputs.profiletitle;
      // inputRef.current['state'].value = inputs.state;
      // inputRef.current['city'].value = inputs.city;
      // inputRef.current['zipcode'].value = inputs.zipcode;
      // inputRef.current['profiledescription'].value = inputs.profiledescription;
    }).catch(error => {
      if(error.response.status){
        logout();
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setSuccess(true);
  }

  const saveBasicInfo = () => {    
    showLoader(true);
    http.post('/basicinfo',
      { 
        user_id:inputs.user_id,
        full_name:inputs.fullname,
        phone_number:inputs.phonenumber,
        profile_title:inputs.profiletitle,
        email_id:inputs.emailid,
        state:inputs.state,
        city:inputs.city,
        zipcode:inputs.zipcode,
        profile_description:inputs.profiledescription,
      }).then((res)=>{
       // setBasicSuccess(true);
        basicToHome(true);
        showLoader(false);
      }).catch(error => {
        if(error.response.status){
          logout();
        }
      }); 
  }

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };
   
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
              ref={el => inputRef.current['fullname'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.fullname || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="phonenumber">Phone Number</label>
            <input 
              type="text" 
              id="phonenumber" 
              ref={el => inputRef.current['phonenumber'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.phonenumber || ''}
              required
            />
          </div>          
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor="profiletitle">Title</label>
            <input 
              type="text" 
              id="profiletitle" 
              ref={el => inputRef.current['profiletitle'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.profiletitle || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="emailid">Email Id</label>
            <input 
              type="email" 
              id="emailid" 
              ref={el => inputRef.current['emailid'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.emailid || ''}
              required
            />
          </div>          
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor="state">State</label>
            <input 
              type="text" 
              id="state" 
              ref={el => inputRef.current['state'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.state || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              ref={el => inputRef.current['city'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.city || ''}
              required
            />
          </div>          
          <div className='col'>
            <label htmlFor="zipcode">Zip Code</label>
            <input 
              type="text" 
              id="zipcode" 
              ref={el => inputRef.current['zipcode'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              value = {inputs.zipcode || ''}
              required
            />
          </div>          
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor='profiledescription'>About</label>
            <textarea 
              id="profiledescription"
              ref={el => inputRef.current['profiledescription'] = el}
              autoComplete="off"
              onChange={handleInputChange}
              required
              value={inputs.profiledescription || ''}
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