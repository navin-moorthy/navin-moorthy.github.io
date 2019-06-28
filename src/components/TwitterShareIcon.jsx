import React from "react";
import tw from "tailwind.macro";
import styled from "styled-components";

const ShareIconLink = styled.a`
  ${tw`inline-block align-middle`}
  text-decoration: none;
  color: #fff;
  margin: 4px;
  height: 33px;
  border: none;
`;

const ShareIconButton = styled.div`
  height: 33px;
  border-radius: 6px;
  transition: 25ms ease-out;
  padding: 3px 8px 3px 10px;
  font-family: Montserrat;
  background-color: #55acee;
  &:hover,
  :active {
    background-color: #2795e9;
  }
`;

const ShareSVG = styled.svg`
  width: 1em;
  height: 1.5em;
  margin-right: 0.4em;
  vertical-align: top;
`;

const ShareIcon = styled.div`
  ${tw`inline-block align-middle border-0`}
`;

const ServiceLabel = styled.span`
  font-size: 12px;
  padding-right: 4px;
`;

const TwitterShareIcon = ({ onClick }) => (
  // eslint-disable-next-line
  <ShareIconLink
    className="resp-sharing-button__link"
    href="#"
    rel="noopener"
    aria-label="Share on Twitter"
    onClick={onClick}
  >
    <ShareIconButton>
      <ShareIcon aria-hidden="true">
        <ShareSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
        </ShareSVG>
      </ShareIcon>
      <ServiceLabel>Share on Twitter</ServiceLabel>
    </ShareIconButton>
  </ShareIconLink>
);

export default TwitterShareIcon;
