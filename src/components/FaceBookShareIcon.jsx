import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

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
  background-color: #3b5998;
  &:hover,
  :active {
    background-color: #2d4373;
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

const FacebookShareIcon = ({ onClick }) => (
  // eslint-disable-next-line
  <ShareIconLink
    className="resp-sharing-button__link"
    href="#"
    target="_blank"
    rel="noopener"
    aria-label="Share on Facebook"
    onClick={onClick}
  >
    <ShareIconButton>
      <ShareIcon aria-hidden="true">
        <ShareSVG
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
        </ShareSVG>
      </ShareIcon>
      <ServiceLabel>Share on Facebook</ServiceLabel>
    </ShareIconButton>
  </ShareIconLink>
);

export default FacebookShareIcon;
