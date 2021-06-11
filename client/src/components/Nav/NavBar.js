import React, {useState}from "react";
import {NavLink as RouterNavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  const NavBar =() =>{
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className="nav-container">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink id= "nav-font"
                tag={RouterNavLink}
                to="/"> PROFILE
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink id= "nav-font"
                tag={RouterNavLink}
                to="/project"> PROJECT
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink id= "nav-font"
                tag={RouterNavLink}
                to="/contact"> CONTACT
                </NavLink>
              </NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

  export default NavBar;