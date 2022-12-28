import { Routes, Route,  Link } from 'react-router-dom';

import './css/style-min.css';
import './css/custom.css';
import './css/article.css';
//import $ from 'jquery';
//import './js/script-min.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Container from './components/Container';


function App() {
  return (
    <div>
        <Header />
        <div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Container />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
