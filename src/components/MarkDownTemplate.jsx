import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import logo from "../../static/logo.png";

// Components
import SEO from "./SEO";

const Logo = tw.img`w-24 md:w-40 m-auto`;

const PostMainStyle = tw.div`font-sans ml-auto text-base text-gray-200 md:text-xl mr-auto max-w-2xl px-5 py-10 `;

const PostHeader = styled.h3`
  ${tw`text-5xl`}
`;

const PostNavigation = tw.ul`flex flex-wrap justify-between p-0 list-none`;

const PostHeaderLink = styled(props => <Link {...props} />)`
  ${tw`text-gray-200 block my-5 border-none`}
  text-shadow: 1px 1px 6px #ec407a;
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <>
      <SEO siteTitle={post.frontmatter.title} />
      <PostMainStyle>
        <Link to="/">
          <Logo src={logo} alt={Logo} />
        </Link>
        <PostHeader>{post.frontmatter.title}</PostHeader>
        <small>{post.frontmatter.date}</small>
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
        <PostHeaderLink to="/blog">← Back to Blog</PostHeaderLink>
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
