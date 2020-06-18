import React from "react"
import SideNav, { MenuIcon } from "react-simple-sidenav"
import { Link, navigateTo } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { LogoLight } from '../images/index'

import Nav from 'react-bootstrap/Nav'
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
      <Container
        fluid
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="mobileNavRow">

          <Col
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              textAlign: 'center'
            }}
          >
            <Link to="/" rel="preload">
              <img
                src={LogoLight}
                alt="Logo"
                className="mobileLogo"
                width={150}
              />
            </Link>
          </Col>
          <Col
            style={{
                placeContent: 'flex-end',
                alignItems: 'flex-end',
                textAlign: 'end',
                textAlign: '-webkit-right',
            }}
          >
            <MenuIcon
              className="navbar-toggle"
              style={{
                  width: '40px',
                  height: 'auto'
              }}
              onClick={() => this.setState({ showNav: true })}
            >
              {" "}
            </MenuIcon>
          </Col>
        </Row>
        <SideNav
          openFromRight={true}
          title={
            <div>
              <Link>
                <img src={LogoLight} width="100%" alt="" />
              </Link>
            </div>
          }
          titleStyle={{
            background: "inherit",
            color: "black",
            width: "auto",
            margin: "auto",
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
            <Link rel="preload" className="nav-link" to="/projects">
              Projects
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
            background: "inherit",
            color: "#fff",
            fontSize: "1.2rem",
            padding: "10px",
            textAlign: "center",
            marginLeft: '1.5rem',
          }}
          navStyle={{ width: "60%", marginRight: '0', background: "rgba(0,0,0,0.8)" }}
          showNav={this.state.showNav}
          onHideNav={() => this.setState({ showNav: false })}
        />
      </Container>
    )
  }
}

export default NavMobile
