import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// elements
import { BigTitle, Subtitle, ErrorPageLink } from "../elements/Titles";

// Components
import SEO from "../components/SEO";
import ContactAnimations from "../components/ContactAnimations";

const NotFoundPage = () => (
  <>
    <SEO siteTitle="404: Not Found" />
    <Parallax pages={1}>
      <ContactAnimations offset={0}>
        <BigTitle>Not Found</BigTitle>
        <Subtitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Subtitle>
        <ErrorPageLink to="/">Go to Home</ErrorPageLink>
      </ContactAnimations>
    </Parallax>
  </>
);

export default NotFoundPage;
