import { Routes, Route,  Link } from 'react-router-dom';

import './css/style-min.css';
import './css/custom.css';
import './css/article.css';
//import $ from 'jquery';
//import './js/script-min.js';

import Api from './Api';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import { createContext, useState } from 'react';
import Resume from './components/Resume';
import Test from './components/Test';
import Pdftest from './components/Pdftest';

const apiToken = createContext();
const userData = createContext();

function App() {
  const {token, user} = Api();
  const [appToken, setAppToken] = useState(token);
  const userInfo = user;

  return (
    <div>
      <apiToken.Provider value={[appToken, setAppToken]}>
        <userData.Provider value={userInfo}>
          <Header />        
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Login />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/pdftest' element={<Pdftest />} />
                <Route path='/test' element={<Test />} />
              </Routes>
          <Footer />
        </userData.Provider>
      </apiToken.Provider>
    </div>
  );
}

export default App;
export {apiToken, userData};
