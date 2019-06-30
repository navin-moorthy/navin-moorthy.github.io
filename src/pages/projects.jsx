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
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
        <div>Projects</div>
      </ProjectWrapper>
    </Layout>
  </>
);

export default Projects;
