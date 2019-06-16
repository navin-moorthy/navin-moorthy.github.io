import React from "react";
import PropTypes from "prop-types";
import theme from "tailwindcss/defaultTheme";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import SVG from "../components/SVG";

// components
import Layout from "../components/Layout";

// elements
import { Divider } from "../elements/Dividers";

import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";

const { colors } = theme;

const grayDarkest = colors.gray["800"];
const orange = colors.orange["500"];

const WaveWrapper = styled.div`
  ${tw`absolute w-full`};
`;

const InnerWave = styled.div`
  ${tw`relative h-full`};
  path {
    ${waveAnimation("20s")};
  }
`;

const BlogStyle = tw.div`font-sans ml-auto text-base md:text-xl mr-auto max-w-4xl px-5 py-10 `;

const BlogHeader = tw.h1`font-serif text-5xl  text-center tracking-wider leading-normal mb-10 mt-0`;

const HeaderLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none text-gray-200`}
  text-shadow: 1px 1px 6px #ec407a;
`;

const PostsHeader = tw.h3`mb-0 mt-6 text-3xl `;

const Small = tw.small`text-sm opacity-75`;

const PostPara = tw.p`text-gray-400 p-0 mx-0 mt-2 mb-8`;

const PostsLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none`}
`;

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout siteTitle="Blog" />
      <Parallax pages={2}>
        <Divider fill="#23262b" speed={0.2} offset={0}>
          <WaveWrapper>
            <InnerWave>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 338.05"
                style={{ height: "100vh" }}
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

        <ParallaxLayer speed={0.4} offset="0" style={{ zIndex: "50" }}>
          <BlogStyle>
            <BlogHeader>
              <HeaderLink to="/">Navin's technical blog</HeaderLink>
            </BlogHeader>
            {posts.map(({ node }) => {
              const { id, excerpt, fields, frontmatter } = node;

              const { title, date, description } = frontmatter;

              return (
                <div key={id}>
                  <PostsHeader>
                    <PostsLink to={`/blog${fields.slug}`}>{title}</PostsLink>
                  </PostsHeader>
                  <Small>{date}</Small>
                  <PostPara
                    dangerouslySetInnerHTML={{
                      __html: description || excerpt
                    }}
                  />
                </div>
              );
            })}
          </BlogStyle>
        </ParallaxLayer>
        <Divider speed={0.1} offset={0}>
          <UpDown>
            <SVG
              icon="triangle"
              width={10}
              fill={colors.blue["900"]}
              left="50%"
              top="75%"
            />
            <SVG
              icon="hexa"
              hiddenMobile
              width={8}
              fill={colors.red["500"]}
              left="75%"
              top="10%"
            />
            <SVG
              icon="arrowUp"
              width={8}
              stroke={grayDarkest}
              left="25%"
              top="5%"
            />
            <SVG
              icon="cross"
              hiddenMobile
              width={24}
              fill={orange}
              left="80%"
              top="80%"
            />
          </UpDown>
          <UpDownWide>
            <SVG
              icon="cross"
              hiddenMobile
              width={16}
              fill={colors.purple["500"]}
              left="5%"
              top="80%"
            />
            <SVG
              icon="triangle"
              width={12}
              stroke={colors.blue[600]}
              left="95%"
              top="10%"
            />
            <SVG
              icon="circle"
              width={6}
              fill={colors.white}
              left="85%"
              top="15%"
            />
            <SVG
              icon="cross"
              width={8}
              fill={colors.indigo[300]}
              left="45%"
              top="10%"
            />
            <SVG icon="box" width={8} fill={orange} left="10%" top="50%" />
          </UpDownWide>
          <SVG
            icon="circle"
            width={6}
            fill={colors.pink[600]}
            left="4%"
            top="20%"
          />
          <SVG
            icon="circle"
            width={48}
            fill={colors.green["500"]}
            left="95%"
            top="60%"
          />
          <SVG
            icon="box"
            hiddenMobile
            width={12}
            fill={colors.teal[300]}
            left="0%"
            top="30%"
          />
          <SVG
            icon="hexa"
            width={12}
            stroke={colors.purple["700"]}
            left="30%"
            top="60%"
          />
        </Divider>
        <Divider
          bg="#23262b"
          clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
          speed={0.2}
          offset={1}
        />
      </Parallax>
    </>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
