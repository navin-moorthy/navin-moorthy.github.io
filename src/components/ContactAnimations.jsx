import React from "react";
import PropTypes from "prop-types";
import tw from "tailwind.macro";
import styled from "styled-components";

import SVG from "./SVG";
import Footer from "./Footer";

import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";

import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";

import {
  white,
  grayDarkest,
  purple,
  teal,
  green,
  indigo,
  pink,
  blue,
  red
} from "../styles/color";

const WaveWrapper = styled.div`
  ${tw`absolute bottom-0 w-full`};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw`relative h-full`};
  svg {
    width: 100%;
    height: 40vh;
  }
  path {
    ${waveAnimation("20s")};
  }
`;

const ContactAnimations = ({ offset, children }) => (
  <>
    <Divider fill="#111" speed={0.5} offset={offset}>
      <WaveWrapper>
        <InnerWave>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
    <Content speed={0.3} offset={offset}>
      <Inner>{children}</Inner>
      <Footer />
    </Content>
    <Divider speed={0.3} offset={offset}>
      <UpDown>
        <SVG icon="upDown" width={8} fill={red} left="60%" top="20%" />
        <SVG icon="triangle" width={8} fill={pink} left="25%" top="5%" />
        <SVG
          icon="circle"
          width={12}
          stroke={grayDarkest}
          left="70%"
          top="60%"
        />
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

export default ContactAnimations;

ContactAnimations.propTypes = {
  offset: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
