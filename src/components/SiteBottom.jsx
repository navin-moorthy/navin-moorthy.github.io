import React from "react";
import PropTypes from "prop-types";

// Components
import SVG from "./SVG";
import Footer from "./Footer";

// Elements
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import BottomWave from "../elements/BottomWave";

// Styles
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

const SiteBottom = ({ offset, children }) => (
  <>
    <Divider fill="#111" speed={0.5} offset={offset}>
      <BottomWave />
    </Divider>
    <Content speed={0.3} offset={offset}>
      <Inner>{children}</Inner>
      <Footer />
    </Content>
    <Divider speed={0.3} offset={offset}>
      <UpDown>
        <SVG icon="upDown" width={8} fill={red} left="60%" top="20%" />
        <SVG icon="triangle" width={8} fill={pink} left="25%" top="5%" />
        <SVG icon="circle" width={12} stroke={gray} left="70%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} fill={purple} left="95%" top="50%" />
        <SVG icon="cross" width={6} fill={white} left="85%" top="15%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={indigo}
          left="35%"
          top="60%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={green} left="4%" top="20%" />
      <SVG icon="box" width={12} stroke={blue} left="40%" top="30%" />
      <SVG icon="hexa" width={8} fill={teal} left="80%" top="70%" />
    </Divider>
  </>
);

export default SiteBottom;

SiteBottom.propTypes = {
  offset: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
