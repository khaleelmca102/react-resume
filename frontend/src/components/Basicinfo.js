import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Api from '../Api'; 
import Resume from './Resume';

const Basicinfo = () => {
  const navigate = useNavigate();

  const {http, user, token} = Api();
  const fullnameRef = useRef();
  const phoneRef = useRef();
  const profiletitleRef = useRef();
  const emailidRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const zipcodeRef = useRef();
  const profiledespRef = useRef();

  const errRef = useRef();
  
  const [user_id, setUserId] = useState(user.user_id);
  const [fullname, setFullName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [emailid, setEmailId] = useState('');
  const [profiletitle, setProfileTitle] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [profiledescription, setProfileDescription] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [basicSuccess, setBasicSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
/*
  axios.interceptors.request.use(
    config=> {
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )
*/
  useEffect(() => {
    fullnameRef.current.focus();
    fetchData()
  },[])
  
  useEffect(() => {
    setErrMsg('');
    // if(basicSuccess){
    //   redirectNavigation()
    // }
  },[fullname, phoneRef, basicSuccess])

  // const redirectNavigation = () =>{
  //   console.log('dd');
  //   return <Resume />
  // }

  const getBasicSuccess = () => {
    return basicSuccess;
  }

  const fetchData = () => {
    http.get('/basicinfo/',{params:{user_id: user_id}}).then((res)=>{
      setFullName(res.data.full_name);
      setPhoneNumber(res.data.phone_number);
      setEmailId(res.data.email_id);
      setProfileTitle(res.data.profile_title);
      setState(res.data.state);
      setCity(res.data.city);
      setZipCode(res.data.zipcode);
      setProfileDescription(res.data.profile_description);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setSuccess(true);
  }

  const saveBasicInfo = () => {
    http.post('/basicinfo',
      { 
        user_id:user_id,
        full_name:fullname,
        phone_number:phonenumber,
        profile_title:profiletitle,
        email_id:emailid,
        state:state,
        city:city,
        zipcode:zipcode,
        profile_description:profiledescription,
      }).then((res)=>{
        setBasicSuccess(true);
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
              value = {fullname || ''}
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
              value = {phonenumber || ''}
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
              ref={profiletitleRef}
              autoComplete="off"
              onChange={(e) => setProfileTitle(e.target.value)}
              value = {profiletitle || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="emailid">Email Id</label>
            <input 
              type="email" 
              id="emailid" 
              ref={emailidRef}
              autoComplete="off"
              onChange={(e) => setEmailId(e.target.value)}
              value = {emailid || ''}
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
              ref={stateRef}
              autoComplete="off"
              onChange={(e) => setState(e.target.value)}
              value = {state || ''}
              required
            />
          </div>
          <div className='col'>
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              ref={cityRef}
              autoComplete="off"
              onChange={(e) => setCity(e.target.value)}
              value = {city || ''}
              required
            />
          </div>          
          <div className='col'>
            <label htmlFor="zipcode">Zip Code</label>
            <input 
              type="text" 
              id="zipcode" 
              ref={zipcodeRef}
              autoComplete="off"
              onChange={(e) => setZipCode(e.target.value)}
              value = {zipcode || ''}
              required
            />
          </div>          
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor='profiledescription'>About</label>
            <textarea 
              id="profiledescription"
              ref={profiledespRef}
              autoComplete="off"
              onChange={(e)=> setProfileDescription(e.target.value)}
              required
              value={profiledescription || ''}
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