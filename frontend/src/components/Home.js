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
import Resume from './Resume';

function Home() {
  const navigate = useNavigate();
  const {getToken} = Api();
  const[currentNav, setCurrentNav] = useState('');  
  const [basicSuccess, setBasicSuccess] = useState('');
  const [templateSuccess, setTemplateSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!getToken()){
      navigate('/login');
    }    
  });  
  useEffect(() => {      
    showLoader(true);
  },[]);  

  const showLoader = (param) => {
    setLoading(param);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
   
  const selectMenu = (currentNav) => {
    setCurrentNav(currentNav);
    showLoader(true);
  }  

  const basicToHome = (childdata) => {
    setBasicSuccess(childdata);
    if(basicSuccess){
      setCurrentNav('yourresume');      
    }
  }

  const templateToHome = (childdata) => {
    setTemplateSuccess(childdata);
    if(templateSuccess){
      showLoader(true);
      setCurrentNav('basicinfo');
    }
  }
  
  const renderNavigation = (param) => {    
    switch(param) {
      case 'basicinfo':
        return <Basicinfo basicToHome={basicToHome} showLoader={showLoader}/>
      case 'yourresume':
        return <Resume />
      default:
        return <Template templateToHome={templateToHome}/>
    }
  }

  return (
    <div>      
      <Container>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
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
      )}     
      </Container>
    </div>
  )
}

export default Home