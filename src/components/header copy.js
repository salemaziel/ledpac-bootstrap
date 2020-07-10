import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import headerStyles from "./header.module.css";

import { LogoLight } from '../images/index'
import NavMobile from "./Navmobile";

//const Header = ({ siteTitle }) => (
const Header = () => (
  <>
    <header /*id="header" */ className={headerStyles.Header}>
      <div className="NoMobile">
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
      </div>

    </header>

    {/*<Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand as={Link} href="/">
      {siteTitle}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem href="/about">
          <Nav.Link as={Link} activeClassName="active" to="/about">
            About
          </Nav.Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto">
        <Button variant="success" onClick={() => alert("Sign Up")}>
          Sign Up
        </Button>
      </Nav>
    </Navbar.Collapse>
</Navbar>*/}
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
