import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

// Styles
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import BlogParallex from "../components/BlogParallex";

// Image
import logo from "../../static/logo.png";

// Local styles
const BlogStyle = tw.div`font-sans ml-auto text-base md:text-xl mr-auto max-w-2xl px-5 py-10 `;

const Logo = tw.img`w-24 md:w-40 m-auto`;

const PostsHeader = tw.h3`mb-0 mt-6 text-3xl `;

const Small = tw.small`text-sm opacity-75`;

const PostPara = tw.p`text-gray-200 p-0 mx-0 mt-2 mb-8`;

const PostsLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none border-none`}
`;

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <BlogParallex>
        <BlogStyle>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
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
      </BlogParallex>
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
