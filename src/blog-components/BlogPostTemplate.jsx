import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bio from "../components/Bio";
import BlogSocialShare from "./BlogSocialShare";
import ThemeSwitch from "../components/ThemeSwitch";

import * as ScrollManager from "../styles/scroll";

const PostMainStyle = tw.div`ml-auto text-sm md:text-base mr-auto max-w-3xl px-5 pt-10`;

const PostHeader = styled.h3`
  ${tw`text-2xl md:text-3xl`}
`;

const PostDate = styled.small`
  ::after {
    content: "";
    width: 50px;
    height: 4px;
    display: block;
    background: linear-gradient(90deg, #ec407a, #40ff00);
    margin: 1rem 0px;
  }
`;

const PostNavigation = tw.ul`flex flex-wrap justify-between p-0 list-none`;

const NavigationLink = styled(Link)`
  ${tw`text-xs lg:text-sm rounded-lg border-b-0`}
  background: #ec407a30;
  padding: 0.3rem;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  // Smooth Scroll Initialization
  useEffect(() => {
    ScrollManager.init();
    return () => ScrollManager.destroy();
  }, []);

  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO siteTitle={post.frontmatter.title} />
      <PostMainStyle>
        <Navbar />
        <ThemeSwitch />
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <PostDate style={{ padding: "5px", display: "block" }}>
          {post.frontmatter.date}
        </PostDate>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <BlogSocialShare title={post.frontmatter.title} />
        <hr />
        <Bio />
        <PostNavigation>
          <li>
            {previous && (
              <NavigationLink to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </NavigationLink>
            )}
          </li>
          <li>
            {next && (
              <NavigationLink to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </NavigationLink>
            )}
          </li>
        </PostNavigation>
        <Footer />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
