import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import SEO from "../components/SEO";
import BlogFooter from "./BlogFooter";
import BlogNavbar from "./BlogNavbar";
import BlogBio from "./BlogBio";

import * as ScrollManager from "../styles/scroll";

const PostMainStyle = tw.div`font-sans ml-auto text-sm text-gray-200 md:text-base mr-auto max-w-2xl px-5 py-10 `;

const PostHeader = styled.h3`
  ${tw`text-2xl md:text-3xl`}
`;

const PostNavigation = tw.ul`flex flex-wrap justify-between p-0 list-none`;

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
        <BlogNavbar />
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <small style={{ padding: "5px", display: "block" }}>
          {post.frontmatter.date}
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <BlogBio />
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
        <BlogFooter />
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
