import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";
import heart from "../images/heart.svg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute font-sans text-xs md:text-sm lg:text-base`};
  bottom: 50px;
`;

const FooterIcon = styled.img`
  display: inline;
`;

const FooterCredits = styled.footer`
  ${tw`text-center text-grey absolute font-sans text-xs md:text-sm lg:text-base`};
  bottom: 10px;
`;

const footerYear = new Date().getFullYear();

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Navin.
        </BigTitle>
        <Subtitle>
          Currently teaching myself web development technologies while working
          fulltime as a Cyber Security Analyst
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Writings</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Blog"
            link="#"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Here you can find my updated colleciton of tips and tutorials which
            I am learning daily.
          </ProjectCard>
          <ProjectCard
            title="Today I Learned"
            link="#"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Here you store the Timeline of my daily logs through which I publish
            my learning to Coding Communities via Twitter.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            I'm a self thaught Web Developer mostly spending my days learning
            and developing web application in different areas of Web
            Technologies from Back End Programming (Node JS, MondoDB and
            Firebase) to Front End Engineering (HTML, CSS, Javascript, Angular,
            React and Gatsby).
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm extremely passionate about web development and design in all it's
          forms. In my spare time, I will be supporting the web development
          communities which is a big part of my life. They support and guide me
          every single day. I have plans to give back something to them in my
          simple language for others to learn. Also, I'm a huge fan of Marvel
          and DC movies.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Find me on these platforms where I am mostly active:{" "}
            <a href="https://twitter.com/navin_navi19">Twitter</a> &{" "}
            <a href="https://github.com/navin-navi">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; {footerYear} - Made with{" "}
          <FooterIcon src={heart} alt="love icon" /> by Navin from{" "}
          <a href="https://github.com/navin-navi/navin-navi.github.io">
            Github
          </a>{" "}
          <br /> Original design by{" "}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
        <FooterCredits>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/google" title="Google">
              Google
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              rel="noopener noreferrer"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>
        </FooterCredits>
      </Contact>
    </Parallax>
  </>
);

export default Index;
