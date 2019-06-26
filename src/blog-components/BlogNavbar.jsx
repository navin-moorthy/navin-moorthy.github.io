import React from "react";
import { Link } from "gatsby";
import tw from "tailwind.macro";

// Logo
import logo from "../../static/logo.png";

const Navbar = tw.div`flex flex-row justify-between items-center mb-10`;
const NavbarHeading = tw.h1``;

const NavbarLogo = tw.img`w-24 m-auto`;

const BlogNavbar = () => (
  <>
    <Navbar>
      <Link to="/blog" style={{ borderBottom: "unset" }}>
        <NavbarHeading>BLOG</NavbarHeading>
      </Link>

      <Link to="/" style={{ borderBottom: "unset" }}>
        <NavbarLogo src={logo} alt="Logo" />
      </Link>
    </Navbar>
  </>
);

export default BlogNavbar;
