import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './RightNav.css'
import ServiceList from "./ServiceList";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding-left: 0;

  li {
    padding: 18px 10px;
  }
  
  .service{
  padding-left: 0;
  color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
  }
`;


export default function RightNav({open}) {
  const [serviceActive, setServiceActive] = useState(false)

  function handleLinkClick () {
    setServiceActive(false)
  }

  return (
    <Ul open={open}>
      <li><Link to="/bio" onClick={handleLinkClick}>About Me</Link></li> 
      <li>
        <ServiceList  serviceActive={serviceActive} setServiceActive={setServiceActive} onClick={handleLinkClick}/>
      </li>
      <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
      <li><Link to="#" onClick={handleLinkClick}>Log Out</Link></li>
    </Ul>
  )
}