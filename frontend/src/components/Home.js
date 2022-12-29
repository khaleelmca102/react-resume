import React from 'react'
import { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
//import Leftmenu from './Leftmenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Template from './Template';
import Basicinfo from './Basicinfo';

function Home() {
  const navigate = useNavigate();
  const {getToken} = Api();

  const getCurrentNav = (currentNav) => {
    return currentNav;
  }  
  const[currentNav, setCurrentNav] = useState(getCurrentNav());
 
  const selectMenu = (currentNav) => {
    setCurrentNav(currentNav);
  }  
  useEffect(() => {
    if(!getToken()){
      navigate('/login');
    }    
  },[]); 


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
                  </Nav>
                  </Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </Col>
          <Col md={8} sm={8}>
            {
              currentNav === 'template'
              ? <Template /> 
              : <Basicinfo />
            }
          </Col>
        </Row>        
      </Container>
    </div>
  )
}

export default Home