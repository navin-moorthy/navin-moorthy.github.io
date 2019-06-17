import React from "react";
import PropTypes from "prop-types";
import SEO from "./SEO";

const Layout = ({ siteTitle }) => (
  <>
    <SEO siteTitle={siteTitle} />
  </>
);

export default Layout;

Layout.propTypes = {
  siteTitle: PropTypes.string.isRequired
};
