import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "./SVG";

import { purple, teal, green, indigo, pink, blue, red } from "../styles/color";

const AboutIndexPage = ({ children, offset }) => (
  <>
    <Divider
      bg="#4b6cb7"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          fill={purple}
          left="50%"
          top="75%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={teal}
          left="70%"
          top="20%"
        />
        <SVG icon="triangle" width={8} stroke={green} left="25%" top="5%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          fill={pink}
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={blue}
          left="5%"
          top="80%"
        />
        <SVG icon="triangle" width={12} stroke={red} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={indigo} left="85%" top="15%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={purple}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={teal} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={green} left="70%" top="60%" />
      <SVG icon="box" width={6} fill={indigo} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={red} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={pink} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default AboutIndexPage;

AboutIndexPage.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
