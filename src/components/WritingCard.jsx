import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-gray-200`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-10px);
  }
`;

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base text-gray-200`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw`text-gray-200 uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const WritingCard = ({ title, children, bg, linkTo }) => (
  <Wrapper bg={bg}>
    <Link to={linkTo}>
      <Text>{children}</Text>
      <Title>{title}</Title>
    </Link>
  </Wrapper>
);

export default WritingCard;

WritingCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
};
