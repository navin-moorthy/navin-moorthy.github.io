import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Styles
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import ThemeSwitch from "../components/ThemeSwitch";
import Creations from "../components/Creations";
import CreationsCard from "../components/CreationsCard";
import AboutIndexPage from "../components/About";
import Contact from "../components/Contact";

// Elements
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Image
import avatar from "../images/avatar.jpg";

// Local styles
const CreationsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8 w-full`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutHero = tw.div`flex flex-col lg:flex-row items-center mt-8`;

const Avatar = tw.img`rounded-full w-32 xl:w-48 shadow-lg h-auto`;

const AboutSub = tw.span`font-serif pt-12 lg:pt-0 lg:pl-12 text-xl lg:text-2xl xl:text-3xl leading-tight`;

const AboutDesc = tw.p`text-lg md:text-base lg:text-lg  pt-6 md:pt-12 text-justify`;

const IndexPage = () => (
  <>
    {/* SEO with Site Header */}
    <SEO siteTitle="Home" />
    {/* Parallax for Background Animation */}
    <Parallax pages={5}>
      {/* Hero Page 1 */}
      <Hero offset={0}>
        <ThemeSwitch />
        <BigTitle>
          Hello, <br /> I&apos;m Navin.
        </BigTitle>
        <Subtitle>
          Currently teaching myself web development technologies while working
          fulltime as a Cyber Security Analyst
        </Subtitle>
      </Hero>

      {/* Writings Page 2 and 3 */}
      <Creations offset={1}>
        <Title>Creations</Title>
        <CreationsWrapper>
          <CreationsCard
            title="Blog"
            bg="linear-gradient(to right, #fc4a1a, #f7b733)"
            linkTo="/blog"
          >
            Colleciton of tips and tutorials that I am learning daily.
          </CreationsCard>
          <CreationsCard
            title="Today I Learned"
            bg="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
            linkTo="/blog/today-i-learned"
          >
            Timeline of my daily worklogs which gets posted in my Twitter.
          </CreationsCard>
          <CreationsCard
            title="Projects"
            bg="linear-gradient(to bottom, #3f5efb 0%, #fc466b 100%)"
            linkTo="/projects"
          >
            Collection of my works on different dev technologies.
          </CreationsCard>
          <CreationsCard
            title="About"
            bg="linear-gradient(to left, #40ff00 0%, #ec407a 100%)"
            linkTo="/about"
          >
            Know more about me here
          </CreationsCard>
        </CreationsWrapper>
      </Creations>

      {/* About Page 4 */}
      <AboutIndexPage offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Navin Navi" />
          <AboutSub>
            A self taught full-stack web developer with 6 months of practise in
            different areas of web Technologies from Front End Programming
            (HTML, CSS, Javascript, Angular, React and Gatsby) to Back End
            Programming (Node JS, MondoDB and Firebase)
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I&apos;m extremely passionate about web development and design in all
          it&apos;s forms. In my spare time, I will be supporting the web
          development communities which is a big part of my life. I hope to give
          back something to them with the knowledge I gained via this blog.
        </AboutDesc>
      </AboutIndexPage>

      {/* Contact Page 5 */}
      <Contact offset={4} />
    </Parallax>
  </>
);

export default IndexPage;
