import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw from "tailwind.macro";

import avatar from "../images/avatar.jpg";

const BioContainer = tw.div`flex flex-row mb-5`;

const Avatar = tw.img`rounded-full w-16  h-16 shadow-lg my-1 mr-2 md:mr-5`;

const BioText = tw.div`flex flex-col text-xs sm:text-sm md:text-base m-2`;

const Text = tw.div`mb-3 md:mb-4`;

const BlogBio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);
  const { social, author } = data.site.siteMetadata;
  return (
    <BioContainer>
      <Avatar src={avatar} alt={author} />
      <BioText>
        <Text>
          Written by <strong>{author}</strong>. I write blogs and log my daily
          activities here.
        </Text>
        <Text>
          <a href={`https://twitter.com/${social.twitter}`}>
            You can follow me on Twitter
          </a>
        </Text>
      </BioText>
    </BioContainer>
  );
};
export default BlogBio;
