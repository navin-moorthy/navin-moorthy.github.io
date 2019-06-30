import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw from "tailwind.macro";
import styled from "styled-components";

// assets
import avatar from "../images/avatar.jpg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import facebook from "../images/facebook.svg";

// Styles
import { flutterAnimation } from "../styles/animations";

const BioContainer = tw.div`flex flex-row mb-5`;

const Avatar = tw.img`rounded-full w-16  h-16 shadow-lg mb-1 mt-4 mr-2 md:mr-5`;

const BioText = tw.div`flex flex-col text-xs sm:text-sm md:text-base m-2`;

const Text = tw.div`mb-3 md:mb-4;`;

const AuthorStrong = styled.span`
  ${tw`inline-block font-bold py-1 px-2 rounded-lg`}
  ${flutterAnimation}
  background: #ec407a69;
`;

const Icon = tw.img`inline m-0 w-5 h-5 mr-5`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            facebook
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
          Created by <AuthorStrong>{author}</AuthorStrong>. He loves to learn,
          blog and develop new applications.
        </Text>
        <Text>
          <a
            href={`https://twitter.com/intent/follow?screen_name=${social.twitter}`}
            style={{ borderBottom: "unset" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={twitter} alt="Twitter Logo" />
          </a>
          <a
            href={`https://github.com/${social.github}`}
            style={{ borderBottom: "unset" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={github} alt="Github Logo" />
          </a>
          <a
            href={`https://www.facebook.com/${social.facebook}`}
            style={{ borderBottom: "unset" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={facebook} alt="FaceBook Logo" />
          </a>
        </Text>
      </BioText>
    </BioContainer>
  );
};
export default Bio;
