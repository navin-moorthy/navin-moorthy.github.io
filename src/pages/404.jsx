import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// elements
import { BigTitle, Subtitle, ErrorPageLink } from "../elements/Titles";

// Components
import SEO from "../components/SEO";
import SiteBottom from "../components/SiteBottom";

const NotFoundPage = () => (
  <>
    {/* SEO with Site Header */}
    <SEO siteTitle="404: Not Found" />
    {/* Parallax for Background Animation */}
    <Parallax pages={1}>
      {/* Contant Background Animation */}
      <SiteBottom offset={0}>
        <BigTitle>Not Found</BigTitle>
        <Subtitle>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Subtitle>
        <ErrorPageLink to="/">Go to Home</ErrorPageLink>
      </SiteBottom>
    </Parallax>
  </>
);

export default NotFoundPage;
