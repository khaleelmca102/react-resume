import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import Template from './Template';

const Leftmenu = () => {
 
  const getCurrentNav = (currentNav) => {
    return currentNav;
  }
  
  const[currentNav, setCurrentNav] = useState(getCurrentNav());
 
  const selectMenu = (currentNav) => {
    setCurrentNav(currentNav);
  }  

  useEffect(()=>{
    
  },[currentNav])

  return (
    <div>
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
    </div>
  )
}

export default Leftmenu