import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../styles/global";
import SEO from "./SEO";
import "typeface-cantata-one";
import "typeface-open-sans";

const Layout = ({ siteTitle }) => (
  <>
    <SEO siteTitle={siteTitle} />
    <GlobalStyle />
  </>
);

export default Layout;

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired
};
