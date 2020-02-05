import React from "react";
import PropTypes from "prop-types";

// Contact Layer
import SiteBottom from "./SiteBottom";
import Footer from "./Footer";

// Elements
import { Title, ContactText } from "../elements/Titles";

const Contact = ({ offset }) => (
  <>
    <SiteBottom offset={offset}>
      <Title>Get in touch</Title>
      <ContactText>
        Find me on these platforms :{" "}
        <a href="https://twitter.com/navin_navi19">Twitter</a> &{" "}
        <a href="https://github.com/navin-moorthy">Github</a>
      </ContactText>
      <Footer />
    </SiteBottom>
  </>
);

export default Contact;

Contact.propTypes = {
  offset: PropTypes.number.isRequired
};
