import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

import SiteBottom from "../views/SiteBottom";
import Inner from "../elements/Inner";
import { BigTitle, Subtitle, ErrorPageLink } from "../elements/Titles";

// Components
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <>
    <Layout siteTitle="404: Not Found" />
    <Parallax pages={1}>
      <SiteBottom offset={0}>
        <Inner>
          <BigTitle>Not Found</BigTitle>
          <Subtitle>
            You just hit a route that doesn&#39;t exist... the sadness.
          </Subtitle>
          <ErrorPageLink to="/">Go to Home</ErrorPageLink>
        </Inner>
      </SiteBottom>
    </Parallax>
  </>
);

export default NotFoundPage;
