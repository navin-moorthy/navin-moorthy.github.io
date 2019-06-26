import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

// Styles
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import BlogParallex from "./BlogParallex";

// Image
import logo from "../../static/logo.png";

// Local styles
const BlogStyle = tw.div`font-sans ml-auto mr-auto max-w-2xl px-5 py-10 `;

const Logo = tw.img`w-24 md:w-40 m-auto pb-5`;

const PostsHeader = tw.h3`mb-0 mt-6 text-xl md:text-3xl `;

const Small = tw.small`text-xs opacity-75`;

const PostPara = tw.p`text-gray-200 p-0 mx-0 mt-2 mb-8 text-sm md:text-base`;

const PostsLink = styled(props => <Link {...props} />)`
  ${tw`no-underline shadow-none border-none`}
`;

const Paginator = tw.ul`flex flex-wrap justify-between items-center p-0 list-none`;

const Blog = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { numPages, currentPage } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${(currentPage - 1).toString()}`;
  const nextPage = `/blog/${(currentPage + 1).toString()}`;

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
          <Paginator>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0
                }}
              >
                <Link
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  style={{
                    padding: "10px",
                    textDecoration: "none",
                    color: i + 1 === currentPage ? "#ffffff" : "",
                    background: i + 1 === currentPage ? "#ec407a" : ""
                  }}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </Paginator>
        </BlogStyle>
      </BlogParallex>
    </>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
