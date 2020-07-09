import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import headerStyles from "./header.module.css";
import SideNav, { MenuIcon } from "react-simple-sidenav";

import { LogoLight } from "../images/index";
import NavMobile from "./Navmobile";

//const Header = ({ siteTitle }) => (
//const Header = () => (
class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showNav: false,
      title: "",
      items: "",
      openFromRight: "",
    };
  }
  render() {
    return (
      <>
        <header /*id="header" */ className={headerStyles.Header}>
          {/* <div className="NoMobile">
      <h1>
        <Link to="/">
        <img src={LogoLight} alt="LEDPac logo" width={175} />
        </Link>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.menu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className={headerStyles.menu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/our-work" className={headerStyles.menu}>
              Our Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className={headerStyles.menu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="NoDesktop">
        <NavMobile />
      </div>*/}

          <Navbar variant="dark" expand="lg">
            <Navbar.Brand>
              <Link to="/">
                <img src={LogoLight} alt="LEDPac logo" width={150} />
              </Link>
            </Navbar.Brand>
            <Nav className="mr-auto NoMobile"></Nav>
            <Nav className="ml-auto NoMobile">
              <NavItem>
                <Nav.Link as={Link} activeClassName="active" to="/">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} activeClassName="active" to="/about">
                  About
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={Link} activeClassName="active" to="/products">
                  Products
                </Nav.Link>
              </NavItem>
              <NavItem >
                <Nav.Link as={Link} activeClassName="active" to="/our-work">
                  Our Work
                </Nav.Link>
              </NavItem>
              <NavItem >
                <Nav.Link as={Link} activeClassName="active" to="/contact">
                  Contact
                </Nav.Link>
              </NavItem>
            </Nav>
            <Nav
              className="ml-auto NoDesktop"
              style={{ verticalAlign: "middle" }}
            >
              <MenuIcon
                style={{
                  width: "40px",
                  height: "auto",
                  marginTop: '-1rem'
                }}
                onClick={() => this.setState({ showNav: true })}
              >
                {" "}
              </MenuIcon>

              <SideNav
                openFromRight={true}
                title={
                  <div>
                    <Link to="/"></Link>
                  </div>
                }
                titleStyle={{
                  background: "inherit",
                  color: "black",
                  width: "auto",
                  margin: "0 auto",
                  padding: "0",
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
                  backgroundColor: "transparent!important",
                  color: "#fff",
                  fontSize: "1.2rem",
                  padding: "10px",
                  textAlign: "center",
                  marginLeft: "1.5rem",
                }}
                navStyle={{
                  width: "60%",
                  marginRight: "0",
                  background: "rgba(0,0,0,0.8)",
                  backgroundColor: "rgba(0,0,0,0.8)",
                }}
                showNav={this.state.showNav}
                onHideNav={() => this.setState({ showNav: false })}
              />
            </Nav>
          </Navbar>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
