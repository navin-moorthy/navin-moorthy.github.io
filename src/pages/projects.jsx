import React from "react";
// import PropTypes from "prop-types";
// import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import Layout from "../components/Layout";

const ProjectWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8 w-full`};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Projects = () => (
  <>
    <Layout pages={3} factor={2} siteTitle="Projects" to="/projects">
      <ProjectWrapper>
        <div>
          <a href="https://navin-navi.github.io/vanuss-first-website/">
            Old Site
          </a>
        </div>
        <div>
          <a href="https://navin-navi.github.io/image-gallery/">
            Image Gallery
          </a>
        </div>
        <div>
          <a href="https://navin-navi.github.io/purrfect-match/#">
            Purrfect Match
          </a>
        </div>
        <div>
          <a href="https://navin-navi.github.io/patterns/">Patterns</a>
        </div>
        <div>
          <a href="https://navin-navi.github.io/museum-of-candy/">
            Meseum Of Candy
          </a>
          <a href="https://navin-navi.github.io/color-game/">Color Game</a>
          <a href="https://navin-navi.github.io/to-do-list-basic/">
            To Do List Basic
          </a>
          <a href="https://navin-navi.github.io/patatap-clone/">
            Patatap Clone
          </a>
        </div>
      </ProjectWrapper>
    </Layout>
  </>
);

export default Projects;
