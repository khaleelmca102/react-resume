import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Api = () => {
  const navigate = useNavigate();
  
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  }

  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const user_detail = JSON.parse(userString);
    return user_detail;
  }
  
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken  = (user,token) =>{
    sessionStorage.setItem('token',JSON.stringify(token));
    sessionStorage.setItem('user',JSON.stringify(user));

    setToken(token); 
    setUser(user);

    navigate('/');
  }

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  const loggedin = () => {
    navigate('/');
  }  

  const http = axios.create({
    baseURL: "http://localhost:8000/api",
    headers:{
        "content-type" : "application/json" 
    }
  });

  return {
    setToken:saveToken,
    token,
    user,
    getToken,
    http,
    logout,
    loggedin
  }
}

export default Api