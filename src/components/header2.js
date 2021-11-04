import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import headerStyles from "./header.module.css";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { LogoLight } from "../images/index";

//const Header = ({ siteTitle }) => (
//const Header = () => (
class Header2 extends React.Component {
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
       <header className={headerStyles.Header}>
       <Navbar variant="dark" expand="lg" className="">
            <Navbar.Brand>
              <Link to="/">
                <img src={LogoLight} alt="LEDpac logo" width={150} />
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
              <NavItem>
                <Nav.Link as={Link} activeClassName="active" to="/our-work">
                  Our Work
                </Nav.Link>
              </NavItem>
              <NavItem>
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
                  marginTop: "-1rem",
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

Header2.propTypes = {
  siteTitle: PropTypes.string,
};

Header2.defaultProps = {
  siteTitle: ``,
};

export default Header2;
