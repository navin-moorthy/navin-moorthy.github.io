import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";

// css
const IconTextContainer = styled.div`
  ${tw` inline-block p-2 m-1 rounded text-1xs cursor-pointer`}
  background: ${props => props.bg};
  &:hover {
    background-color: ${props => props.hoverbg};
  }
`;

const Icon = styled.div`
  ${tw`inline-block align-middle w-4 h-4 ml-1 mr-2`}
`;

const Text = tw.span`align-middle`;

const ShareIconWrapper = ({ text, bg, hoverbg, children, onClick }) => (
  <IconTextContainer bg={bg} hoverbg={hoverbg} onClick={onClick}>
    <Icon>{children}</Icon>
    <Text>{text}</Text>
  </IconTextContainer>
);

export default ShareIconWrapper;

ShareIconWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  hoverbg: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.func.isRequired
};
