import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

// components
import Layout from "../components/Layout";

const BlogStyle = tw.div`font-sans ml-auto text-base md:text-xl mr-auto max-w-4xl px-5 py-10 `;

const BlogHeader = tw.h1`font-serif text-5xl  text-center tracking-wider leading-normal mb-10 mt-0`;

const HeaderLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none text-gray-200`}
  text-shadow: 3px 4px 6px #ec407a;
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
