import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

// assets
import heart from "../images/heart.svg";

// Styles
import { heartBeat } from "../styles/animations";

// CSS
const FooterMain = tw.footer`text-center font-semibold text-1xs lg:text-xs p-2`;

const FooterIcon = styled.img`
  ${tw` inline m-0`}
  ${heartBeat}
`;

const Footer = () => (
  <>
    <FooterMain>
      &copy; {new Date().getFullYear()} - Made with{" "}
      <FooterIcon src={heart} alt="love icon" /> by Navin{" "}
      <a href="https://github.com/navin-navi/navin-moorthy.github.io">
        {" "}
        Hosted in GHPages
      </a>{" "}
      <br /> Built with <a href="https://www.gatsbyjs.org/"> Gatsby</a>. Design
      Inspiration <a href="https://www.lekoarts.de">LekoArts</a>.
    </FooterMain>
  </>
);

export default Footer;
