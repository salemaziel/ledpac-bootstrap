import React from "react"
import SideNav, { MenuIcon } from "react-simple-sidenav"
import { Link, navigateTo } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LogoLight } from '../images/index'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Button from "react-bootstrap/Button"

//import navmobileStyles from "./navmobile.module.css"
//import { MenuIcon } from "../images/index"

class NavMobile extends React.Component {
  constructor() {
    super()

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    }
  }
  render() {
    return (
      <>
            <MenuIcon
              
              style={{
                  width: '40px',
                  height: 'auto'
              }}
              onClick={() => this.setState({ showNav: true })}
            >
              {" "}
            </MenuIcon>

        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link to="/">
              </Link>
            </div>
          }
          titleStyle={{
            background: "inherit",
            color: "black",
            width: "auto",
            margin: "0 auto",
            padding: "0"
          }}
          items={[
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/">
              Home
            </Link>
            </Nav.Item>,
                        <Nav.Item>
            <Link rel="preload" className="nav-link" to="/about">
              About
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/our-work">
              Our Work
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/products">
              Products
            </Link>
            </Nav.Item>,
            <Nav.Item>
            <Link rel="preload" className="nav-link" to="/contact">
              Contact
            </Link>
            </Nav.Item>,
          ]}
          itemStyle={{
            background: "transparent!important",
            backgroundColor: 'transparent!important',
            color: "#fff",
            fontSize: "1.2rem",
            padding: "10px",
            textAlign: "center",
            marginLeft: '1.5rem',
          }}
          navStyle={{ width: "60%", marginRight: '0', background: "rgba(0,0,0,0.8)", backgroundColor:"rgba(0,0,0,0.8)" }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
{/*</Navbar>*/}
</>
    )
  }
}

export default NavMobile
