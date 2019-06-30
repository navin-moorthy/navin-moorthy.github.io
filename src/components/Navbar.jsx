import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import tw from "tailwind.macro";

// Logo
import logo from "../../static/logo.png";

const NavbarContainer = tw.div`flex flex-row justify-between items-center mb-10`;

const NavbarLogo = tw.img`w-24 m-auto`;

const Navbar = ({ pageTitle, to }) => (
  <>
    <NavbarContainer>
      <Link to={to} style={{ borderBottom: "unset" }}>
        <h1>{pageTitle}</h1>
      </Link>

      <Link to="/" style={{ borderBottom: "unset" }}>
        <NavbarLogo src={logo} alt="Logo" />
      </Link>
    </NavbarContainer>
  </>
);

export default Navbar;

Navbar.propTypes = {
  pageTitle: PropTypes.string,
  to: PropTypes.string
};

Navbar.defaultProps = {
  pageTitle: "Blog",
  to: "/blog"
};
