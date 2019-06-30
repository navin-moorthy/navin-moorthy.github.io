import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Styles
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import SEO from "../components/SEO";
import WritingCard from "../components/WritingCard";
import Hero from "../components/Hero";
import Writings from "../components/Writings";
import About from "../components/About";
import Contact from "../components/Contact";
import ThemeSwitch from "../components/ThemeSwitch";

// Elements
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Image
import avatar from "../images/avatar.jpg";

// Local styles
const WritingsWrapper = styled.div`
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

const AboutSub = tw.span`pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`;

const AboutDesc = tw.p`text-lg md:text-xl lg:text-2xl pt-6 md:pt-12 text-justify`;

const Index = () => (
  <>
    {/* SEO with Site Header */}
    <SEO siteTitle="Home" />
    {/* Parallax for Background Animation */}
    <Parallax pages={5}>
      {/* Hero Page 1 */}
      <Hero offset={0}>
        <ThemeSwitch />
        <BigTitle>
          Hello, <br /> I'm Navin.
        </BigTitle>
        <Subtitle>
          Currently teaching myself web development technologies while working
          fulltime as a Cyber Security Analyst
        </Subtitle>
      </Hero>

      {/* Writings Page 2 and 3 */}
      <Writings offset={1}>
        <Title>Writings</Title>
        <WritingsWrapper>
          <WritingCard
            title="Blog"
            bg="linear-gradient(to right, #fc4a1a, #f7b733)"
            linkTo="/blog"
          >
            Colleciton of tips and tutorials that I am learning daily.
          </WritingCard>
          <WritingCard
            title="Today I Learned"
            bg="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
            linkTo="/blog/today-i-learned"
          >
            Timeline of my daily worklogs which gets posted in my Twitter.
          </WritingCard>
          <WritingCard
            title="Projects"
            bg="linear-gradient(to top, #3f5efb 0%, #fc466b 100%)"
            linkTo="/projects"
          >
            Collection of my creations.
          </WritingCard>
        </WritingsWrapper>
      </Writings>

      {/* About Page 4 */}
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Navin Navi" />
          <AboutSub>
            I'm a self taught Web Developer. Mostly learning and developing web
            application in different areas of Web Technologies from Front End
            Engineering (HTML, CSS, Javascript, Angular, React and Gatsby) to
            Back End Programming (Node JS, MondoDB and Firebase).
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm extremely passionate about web development and design in all it's
          forms. In my spare time, I will be supporting the web development
          communities which is a big part of my life. They support and guide me
          every single day. I think to give back something to them with the
          knowledge I gained via this site.
        </AboutDesc>
      </About>

      {/* Contact Page 5 */}
      <Contact offset={4} />
    </Parallax>
  </>
);

export default Index;
