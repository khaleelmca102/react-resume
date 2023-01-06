import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Api = () => {
  const navigate = useNavigate();
  
  const getToken = () => {
    var userToken = '';
    if (localStorage.getItem("token") !== null) {
      const tokenString = localStorage.getItem('token');
      userToken = JSON.parse(tokenString);
    }
    return userToken;
  }

  const getUser = () => {
    var user_detail = '';
    if (localStorage.getItem("token") !== null) {
      const userString = localStorage.getItem('user');
      user_detail = JSON.parse(userString);
    }
    return user_detail;
  }
  
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken  = (user,token) =>{
    localStorage.setItem('token',JSON.stringify(token));
    localStorage.setItem('user',JSON.stringify(user));

    setToken(token); 
    setUser(user);

    navigate('/');
  }

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }

  const loggedin = () => {
    navigate('/');
  }  

  const http = axios.create({
    baseURL: "http://localhost:8000/api",
    headers:{
        "content-type" : "application/json",
        "Authorization" : `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        withCredentials: true
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