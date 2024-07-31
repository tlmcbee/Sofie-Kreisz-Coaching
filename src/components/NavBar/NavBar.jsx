import { Link } from "react-router-dom"
import styled from "styled-components"
import * as userService from "../../utilities/users-services"
import './NavBar.css'
import Burger from "./Burger/Burger.jsx"
import { useState } from "react"


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`


export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }
  const [serviceActive, setServiceActive] = useState(false)

  function handleLinkClick () {
    setServiceActive(false)
  }

  return (
    <Nav>
      <div className="logo" >
        <Link to="/*" onClick={handleLinkClick}>
        SofieKreisz
        </Link>
      </div>
      <Burger serviceActive={serviceActive} setServiceActive={setServiceActive} />
    </Nav>
  )
}