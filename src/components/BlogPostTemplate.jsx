import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import tw from "tailwind.macro";
import theme from "tailwindcss/defaultTheme";

// Components
import Layout from "./Layout";

import SVG from "./SVG";

// views
import SiteBottom from "../views/SiteBottom";

// elements
import { Divider } from "../elements/Dividers";

// styles
import { UpDown, UpDownWide, waveAnimation } from "../styles/animations";

const WaveWrapper = styled.div`
  ${tw`absolute w-full`};
`;

const InnerWave = styled.div`
  ${tw`relative h-full`};
  path {
    ${waveAnimation("20s")};
  }
`;

const PostMainStyle = tw.div`font-sans ml-auto text-base text-gray-200 md:text-xl mr-auto max-w-2xl px-5 py-10 `;

const PostMainHeader = tw.h1`font-serif text-2xl  text-center tracking-wider leading-normal mb-10 mt-0`;

const PostHeaderLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none text-gray-200`}
  text-shadow: 1px 1px 6px #ec407a;
`;

const PostHeader = styled.h3`
  ${tw`mb-0 mt-12 text-5xl`}
  color: #ec407a
`;

const PostNavigation = tw.ul`flex flex-wrap justify-between p-0 list-none`;

const Small = tw.small`text-sm opacity-75`;

const PostsLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none`}
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <>
      <Layout siteTitle={siteTitle} />
      <PostMainStyle>
        <PostMainHeader>
          <PostHeaderLink to="/blog">Navin's technical blog</PostHeaderLink>
        </PostMainHeader>
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <Small>{post.frontmatter.date}</Small>
        <div
          style={{ fontSize: "18px" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <PostNavigation>
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </PostNavigation>
      </PostMainStyle>
    </>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
