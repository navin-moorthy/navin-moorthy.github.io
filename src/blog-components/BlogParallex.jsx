import React from "react";
import PropTypes from "prop-types";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";

// components
import SEO from "../components/SEO";
import SVG from "../components/SVG";

// views
import Contact from "../components/Contact";

// elements
import { Divider } from "../elements/Dividers";
import TopWave from "../elements/TopWave";

// styles
import { UpDown, UpDownWide } from "../styles/animations";
import {
  white,
  gray,
  purple,
  teal,
  green,
  indigo,
  pink,
  blue,
  red
} from "../styles/color";

const BlogParallex = ({ children }) => (
  <>
    <SEO siteTitle="Blog" />
    <Parallax pages={3}>
      <ParallaxLayer speed={0.4} offset="0" style={{ zIndex: "50" }}>
        {children}
      </ParallaxLayer>
      <Divider fill="#111" speed={0.2} offset={0}>
        <TopWave />
      </Divider>
      <Divider speed={0.1} offset={0} factor={2.5}>
        <UpDown>
          <SVG icon="triangle" width={10} fill={blue} left="50%" top="75%" />
          <SVG
            icon="hexa"
            hiddenMobile
            width={8}
            fill={red}
            left="75%"
            top="10%"
          />
          <SVG icon="arrowUp" width={8} stroke={gray} left="25%" top="5%" />
          <SVG
            icon="cross"
            hiddenMobile
            width={24}
            fill={teal}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="cross"
            hiddenMobile
            width={16}
            fill={purple}
            left="5%"
            top="80%"
          />
          <SVG icon="triangle" width={12} stroke={blue} left="95%" top="10%" />
          <SVG icon="circle" width={6} fill={white} left="85%" top="15%" />
          <SVG icon="cross" width={8} fill={indigo} left="45%" top="10%" />
          <SVG icon="box" width={8} fill={teal} left="10%" top="50%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={pink} left="4%" top="20%" />
        <SVG icon="circle" width={48} fill={green} left="95%" top="60%" />
        <SVG
          icon="box"
          hiddenMobile
          width={12}
          fill={teal}
          left="0%"
          top="30%"
        />
        <SVG icon="hexa" width={12} stroke={red} left="30%" top="60%" />
      </Divider>
      <Contact offset={2} />
    </Parallax>
  </>
);

export default BlogParallex;

BlogParallex.propTypes = {
  children: PropTypes.node.isRequired
};
