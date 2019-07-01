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
          <a
            href="https://navin-navi.github.io/vanuss-first-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Old Site
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/image-gallery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Gallery
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/purrfect-match/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purrfect Match
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/patterns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patterns
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/museum-of-candy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meseum Of Candy
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/color-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Game
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/to-do-list-basic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            To Do List Basic
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/patatap-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patatap Clone
          </a>
          <a
            href="http://yelp-camp-campground.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YelpCamp Campground
          </a>
        </div>
        <div>
          <a
            href="http://yelp-camp-campground.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YelpCamp Campground
          </a>
        </div>
        <div>
          <a
            href="https://vanuss-v2.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanuss Nodified & Redesigned
          </a>
        </div>
      </ProjectWrapper>
    </Layout>
  </>
);

export default Projects;
