import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";

import SiteBottom from "./ContactAnimations";

import { Title } from "../elements/Titles";

const ContactText = tw.p`text-gray-400 font-semibold text-xl md:text-2xl lg:text-3xl`;

const Contact = ({ offset }) => (
  <>
    <SiteBottom offset={offset}>
      <Title>Get in touch</Title>
      <ContactText>
        Find me on these platforms where I am spend most of my time:{" "}
        <a href="https://twitter.com/navin_navi19">Twitter</a> &{" "}
        <a href="https://github.com/navin-navi">Github</a>
      </ContactText>
    </SiteBottom>
  </>
);

export default Contact;

Contact.propTypes = {
  offset: PropTypes.number.isRequired
};
