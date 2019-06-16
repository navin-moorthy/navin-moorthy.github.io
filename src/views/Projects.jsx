import React from "react";
import PropTypes from "prop-types";
import theme from "tailwindcss/defaultTheme";
import { Divider, DividerMiddle } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import SVG from "../components/SVG";

const { colors } = theme;

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={1}>
      <Inner>{children}</Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={2}>
      <UpDown>
        <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
        <SVG
          icon="upDown"
          width={8}
          fill={colors.teal["500"]}
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors.orange["500"]}
          left="25%"
          top="5%"
        />
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          fill={colors.white}
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          fill={colors.green["500"]}
          left="20%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.white}
          left="90%"
          top="30%"
        />
        <SVG
          icon="circle"
          width={16}
          fill={colors.yellow["500"]}
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          hiddenMobile
          width={16}
          stroke={colors.teal["500"]}
          left="18%"
          top="75%"
        />
        <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors.green["500"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG
        icon="circle"
        width={12}
        fill={colors.pink["500"]}
        left="10%"
        top="60%"
      />
      <SVG
        icon="box"
        width={6}
        fill={colors.orange["500"]}
        left="10%"
        top="10%"
      />
      <SVG
        icon="box"
        width={12}
        fill={colors.yellow["500"]}
        left="29%"
        top="26%"
      />
      <SVG
        icon="hexa"
        width={16}
        stroke={colors.red["500"]}
        left="75%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke={colors.yellow["500"]}
        left="40%"
        top="70%"
      />
    </Divider>
  </>
);

export default Projects;

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
