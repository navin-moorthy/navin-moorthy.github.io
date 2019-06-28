import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "./SVG";

import { purple, teal, green, indigo, pink, blue, red } from "../styles/color";

const Wrapper = tw.div`w-full xl:w-2/3`;

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset} factor={3}>
      <UpDown>
        <SVG
          icon="triangle"
          hiddenMobile
          width={48}
          stroke={purple}
          left="10%"
          top="20%"
        />
        <SVG icon="hexa" width={48} stroke={teal} left="60%" top="70%" />
        <SVG icon="box" width={6} fill={green} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={indigo}
          left="80%"
          top="10%"
        />
        <SVG icon="triangle" width={12} stroke={pink} left="90%" top="50%" />
        <SVG icon="circle" width={16} fill={blue} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={red} left="30%" top="65%" />
        <SVG icon="cross" width={16} stroke={purple} left="58%" top="15%" />
        <SVG icon="circle" width={6} fill={teal} left="75%" top="10%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={green}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={24}
        fill={indigo}
        left="5%"
        top="70%"
      />
      <SVG icon="circle" width={6} fill={pink} left="4%" top="20%" />
      <SVG
        icon="upDown"
        hiddenMobile
        width={24}
        fill={blue}
        left="40%"
        top="80%"
      />
      <SVG icon="triangle" width={8} stroke={red} left="25%" top="5%" />
      <SVG icon="circle" width={64} fill={purple} left="95%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} fill={teal} left="5%" top="90%" />
      <SVG icon="box" width={6} fill={pink} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={blue} left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke={red} left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke={indigo} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
