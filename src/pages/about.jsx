import React from "react";

// Components
import Layout from "../components/Layout";
// import About from "../components/about";
// import Awards from "../components/awards";
// import Education from "../components/education";
// import Interests from "../components/interests";
// import Languages from "../components/languages";
// // import { Dump } from '../util/helpers'
// import Layout from "../components/layout";
// import Publications from "../components/publications";
// import References from "../components/references";
// import Skills from "../components/skills";
// import ThemeSelect from "../components/themeSelect";
// import Volunteer from "../components/volunteer";
// import Work from "../components/work";

const AboutPage = () => (
  <Layout siteTitle="About" to="/about" bio={false}>
    <div>test</div>
    {/* <Dump props={work} /> */}
    {/* <About />
    <Skills />
    <Work />
    <Volunteer />
    <Education />
    <Awards />
    <Publications />
    <Languages />
    <Interests />
    <References />
    <ThemeSelectWrapper>
      <ThemeSelect />
    </ThemeSelectWrapper> */}
  </Layout>
);

export default AboutPage;
