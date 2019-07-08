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
      <h1>Big Projects</h1>
      <ProjectWrapper>
        <div>
          <a
            href="https://navin-navi.github.io/angular-issue-tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular Issue Tracker
          </a>
        </div>
        <div>
          <a
            href="http://angular7-udemy-the-complete-guide.s3-website.ap-south-1.amazonaws.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular Recipe Book Basic
          </a>
        </div>
        <div>
          <a
            href="https://materialized-blog.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Materialized Blog
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/shrine-material-design-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shrine MDN Site
          </a>
        </div>
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
        <div>
          <a
            href="https://navin-navi.github.io/fullpage-js-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FullPage JS Demo
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/component-pricing-plans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pricing Plans Components
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/vue-animations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue Animation Basics
          </a>
        </div>
        <div>
          <a
            href="https://to-do-ajax.herokuapp.com/todos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajax To Do App
          </a>
        </div>
        <div>
          <a
            href="https://navin-navi.github.io/behance-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance Clone
          </a>
        </div>
      </ProjectWrapper>
      <h1>CodePen Creations</h1>
      <ProjectWrapper>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/WWKdoP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Circle to Square Animation
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/PgrZpd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkbox Varieties
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/OYVeLw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanos Snap Effect
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/vwOqZj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanos Snap
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/ZNOboZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Floating Form Label - Materialized
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/QREEZZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pure CSS - Slides and Loaders
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/byever"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hamburger Menu Animation
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/jorXRE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Testimonial Box Component
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/PvGmrP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simple Profile without Bootstrap with own design.
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/QRmJrd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simple Profile with Bootstrap and Material Theme
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/YbajNB"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linear Gradient Experiments
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/navinnavi19/full/qGrKrN"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Positioning and Z-Index Playground
          </a>
        </div>
      </ProjectWrapper>
    </Layout>
  </>
);

export default Projects;
