import { Routes, Route,  Link } from 'react-router-dom';

import './css/style-min.css';
import './css/custom.css';
import './css/article.css';
//import $ from 'jquery';
//import './js/script-min.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Login />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
