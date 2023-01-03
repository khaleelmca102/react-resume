import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Template from './Template';
import Basicinfo from './Basicinfo';
import Resume from './Resume';

import { apiToken } from '../App';

function Home() {
  const navigate = useNavigate();
  const [currentNav, setCurrentNav] = useState('');
  const [appToken, setAppToken] = useContext(apiToken);
  
  const checkLogin = () => {
    if(!appToken){
      navigate('/login');
    }  
  }

  useEffect(() => {
    checkLogin();
  });  

  const selectMenu = (currentNav) => {
    setCurrentNav(currentNav);
  }  


  const renderNavigation = (param) => { 
    switch(param) {
      case 'basicinfo':
        return <Basicinfo setCurrentNav={setCurrentNav} checkLogin={checkLogin} />
      case 'yourresume':
        return <Resume />
      default:
        return <Template setCurrentNav={setCurrentNav}/>
    }
  }


  return (
    <div>      
      <Container>
      
        <Row>
          <Col md={3} sm={3}>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                  <Accordion.Header>Make your Resume</Accordion.Header>
                  <Accordion.Body>
                  <Nav defaultActiveKey="/" className="flex-column"  onSelect={selectMenu}>
                      <Nav.Link eventKey="template" title="Choose Templae">Choose Template</Nav.Link>
                      <Nav.Link eventKey="basicinfo" title="Basic Info">Basic Info</Nav.Link>
                      <Nav.Link eventKey="yourresume" title="Your Resume">Your Resume</Nav.Link>
                  </Nav>
                  </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </Col>
          <Col md={8} sm={8}>
          {
            renderNavigation(currentNav)
          }
          </Col>
        </Row>   
      </Container>
    </div>
  )
  
}

export default Home