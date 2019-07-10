import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";

// components
import SEO from "./SEO";
import ThemeSwitch from "./ThemeSwitch";
import Navbar from "./Navbar";
import Bio from "./Bio";
import Footer from "./Footer";

const Contents = tw.div`ml-auto text-xs md:text-sm lg:text-base mr-auto max-w-4xl px-5 py-10`;

const Layout = ({ children, siteTitle, to, bio }) => (
  <>
    <SEO siteTitle={siteTitle} />
    <Contents>
      <ThemeSwitch />
      <Navbar pageTitle={siteTitle} to={to} />
      {bio && <Bio />}
      {children}
    </Contents>
    <Footer />
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  bio: PropTypes.bool
};

Layout.defaultProps = {
  bio: true
};
