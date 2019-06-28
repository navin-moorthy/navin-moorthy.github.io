import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

// assets
import heart from "../images/heart.svg";

// Styles
import { heartBeat } from "../styles/animations";

// CSS
const FooterMain = styled.footer`
  ${tw`text-center absolute font-semibold text-xs md:text-sm lg:text-base`};
  bottom: 70px;
`;

const FooterIcon = styled.img`
  ${tw` inline m-0`}
  ${heartBeat}
`;

const FooterCredits = styled.footer`
  ${tw`text-center font-semibold absolute text-xs md:text-sm lg:text-base`}
  bottom:20px
`;

const Footer = () => (
  <>
    <FooterMain>
      &copy; {new Date().getFullYear()} - Made with{" "}
      <FooterIcon src={heart} alt="love icon" /> by Navin{" "}
      <a href="https://github.com/navin-navi/navin-navi.github.io">
        {" "}
        Hosted with GHPages
      </a>{" "}
      <br /> Built with <a href="https://www.gatsbyjs.org/"> Gatsby</a>. Design
      Inspiration <a href="https://www.lekoarts.de">LekoArts</a>.
    </FooterMain>
    <FooterCredits>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/google" title="Google">
          Google
        </a>
        {" , "}
        <a
          href="https://www.flaticon.com/authors/elegant-themes"
          title="Elegant Themes"
        >
          Elegant Themes
        </a>
        {" & "}
        <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">
          Icomoon
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          rel="noopener noreferrer"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </div>
    </FooterCredits>
  </>
);

export default Footer;
