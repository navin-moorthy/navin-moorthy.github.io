import React from "react";
// import PropTypes from "prop-types";
// import { Link, graphql } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

// Components
import Layout from "../components/Layout";

// Images

import angularIssueTracker from "../images/projects/angular-issue-tracker.png";
import angularRecipeBook from "../images/projects/angular-recipe-book.png";
import materializeBlog from "../images/projects/materialized-blog.png";
import patterns from "../images/projects/patterns.png";
import vanuss from "../images/projects/vanuss.png";
import museumOfCandy from "../images/projects/museum-of-candy.png";
import shrineMdnSite from "../images/projects/shrine-mdn-site.png";
import vueAnimation from "../images/projects/vue-animation.png";
import colorGame from "../images/projects/color-game.png";
import patatapClone from "../images/projects/patatap-clone.png";
import toDoListBasic from "../images/projects/to-do-list-basic.png";
import behanceClone from "../images/projects/behance-clone.png";
import ajaxToDoList from "../images/projects/ajax-to-do-list.png";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8 w-full`};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectWrapper = tw.div`text-center`;

const Projects = () => (
  <>
    <Layout pages={6} factor={2} siteTitle="Projects" to="/projects">
      <h1>Creations</h1>
      <h4 style={{ textAlign: "center" }}>
        See my Codepen Creations <Link to="/blog/codepen-creations/">here</Link>
      </h4>
      <ProjectsWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/angular-issue-tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular Issue Tracker
            <img src={angularIssueTracker} alt="Angular Issue Tracker" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="http://angular7-udemy-the-complete-guide.s3-website.ap-south-1.amazonaws.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular Recipe Book Basic
            <img src={angularRecipeBook} alt="Angular Recipe Book" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://materialized-blog.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Materialized Blog
            <img src={materializeBlog} alt="Materialized Blog" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://vanuss-v2.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanuss V2
            <img src={vanuss} alt="Vanuss Nodified" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/museum-of-candy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meseum Of Candy
            <img src={museumOfCandy} alt="Meseum Of Candy" />
          </a>
        </ProjectWrapper>

        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/patterns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patterns
            <img src={patterns} alt="Patterns" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/shrine-material-design-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shrine MDN Site
            <img src={shrineMdnSite} alt="Shrine MDN Site" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/color-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Game
            <img src={colorGame} alt="Color Game" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://to-do-ajax.herokuapp.com/todos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajax To Do App
            <img src={ajaxToDoList} alt="Ajax To Do App" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/to-do-list-basic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            To Do List Basic
            <img src={toDoListBasic} alt="To Do List Basic" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/patatap-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patatap Clone
            <img src={patatapClone} alt="Patatap Clone" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/vue-animations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue Animation Basics
            <img src={vueAnimation} alt="Vue Animation" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/behance-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance Clone
            <img src={behanceClone} alt="Behance Clone" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/vanuss-first-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanuss V1
            <img src={vanuss} alt="Vanuss v1" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/image-gallery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Gallery
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/purrfect-match/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purrfect Match
          </a>
        </ProjectWrapper>

        <ProjectWrapper>
          <a
            href="http://yelp-camp-campground.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YelpCamp Campground
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/fullpage-js-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FullPage JS Demo
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-navi.github.io/component-pricing-plans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pricing Plans Components
          </a>
        </ProjectWrapper>
      </ProjectsWrapper>
    </Layout>
  </>
);

export default Projects;
