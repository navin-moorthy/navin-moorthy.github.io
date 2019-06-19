import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import heart from "../images/heart.svg";

const FooterMain = styled.footer`
  ${tw`text-center text-gray-500 absolute font-semibold text-xs md:text-sm lg:text-base`};
  bottom: 60px;
`;

const FooterIcon = tw.img`inline m-0`;

const FooterCredits = styled.footer`
  ${tw`text-center text-gray-500 font-semibold absolute text-xs md:text-sm lg:text-base`}
  bottom:20px
`;

const Footer = () => (
  <>
    <FooterMain>
      &copy; {new Date().getFullYear()} - Made with{" "}
      <FooterIcon src={heart} alt="love icon" /> by Navin{" "}
      <a href="https://github.com/navin-navi/navin-navi.github.io">
        {" "}
        Hosted in Github
      </a>{" "}
      <br /> Designed by <a href="https://www.lekoarts.de">LekoArts</a>.
    </FooterMain>
    <FooterCredits>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/google" title="Google">
          Google
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
