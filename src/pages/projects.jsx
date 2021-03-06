import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

// Components
import Layout from "../components/Layout";

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

const ProjectsPage = ({ data }) => (
  <>
    <Layout siteTitle="Projects" to="/projects">
      <h1>Creations</h1>
      <h4 style={{ textAlign: "center" }}>
        Codepen Creations <Link to="/blog/codepen-creations/">here</Link>
      </h4>
      <ProjectsWrapper>
        <ProjectWrapper>
          <a
            href="https://jackfitnessstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Jack Fitness Studio</span>
            <Image
              fluid={data.jackFitnessStudio.childImageSharp.fluid}
              alt="Jack Fitness Studio"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy-crown-clothing.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Crown Clothing</span>
            <Image
              fluid={data.crownClothing.childImageSharp.fluid}
              alt="Crown Clothing"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://angular-express-issue-tracker.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Angular Issue Tracker</span>
            <Image
              fluid={data.angularIssueTracker.childImageSharp.fluid}
              alt="Angular Issue Tracker"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="http://angular7-udemy-the-complete-guide.s3-website.ap-south-1.amazonaws.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular Recipe Book Basic
            <Image
              fluid={data.angularRecipeBook.childImageSharp.fluid}
              alt="Angular Recipe Book"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://materialized-blog.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Materialized Blog
            <Image
              fluid={data.materializeBlog.childImageSharp.fluid}
              alt="Materialized Blog"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://to-do-ajax.herokuapp.com/todos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajax To Do App
            <Image
              fluid={data.ajaxToDoList.childImageSharp.fluid}
              alt="Ajax To Do App"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="http://yelp-camp-campground.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            YelpCamp Campground
            <Image fluid={data.yelpcamp.childImageSharp.fluid} alt="YelpCamp" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/redux-github-commits-history-chart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Commit History
            <Image
              fluid={data.githubCommitHistory.childImageSharp.fluid}
              alt="Github Commit History"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/color-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Game
            <Image
              fluid={data.colorGame.childImageSharp.fluid}
              alt="Color Game"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://vanuss-v2.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanuss V2
            <Image
              fluid={data.vanuss.childImageSharp.fluid}
              alt="Vanuss Nodified"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/museum-of-candy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meseum Of Candy
            <Image
              fluid={data.museumOfCandy.childImageSharp.fluid}
              alt="Meseum Of Candy"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/shrine-material-design-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shrine MDN Site
            <Image
              fluid={data.shrineMdnSite.childImageSharp.fluid}
              alt="Shrine MDN Site"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/to-do-list-basic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            To Do List Basic
            <Image
              fluid={data.toDoListBasic.childImageSharp.fluid}
              alt="To Do List Basic"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/patatap-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patatap Clone
            <Image
              fluid={data.patatapClone.childImageSharp.fluid}
              alt="Patatap Clone"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/vue-animations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue Animation Basics
            <Image
              fluid={data.vueAnimation.childImageSharp.fluid}
              alt="Vue Animation"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/patterns/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Patterns
            <Image fluid={data.patterns.childImageSharp.fluid} alt="Patterns" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/behance-clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance Clone
            <Image
              fluid={data.behanceClone.childImageSharp.fluid}
              alt="Behance Clone"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/vanuss-first-website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vanuss V1
            <Image fluid={data.vanuss.childImageSharp.fluid} alt="Vanuss v1" />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/image-gallery/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image Gallery
            <Image
              fluid={data.imageGallery.childImageSharp.fluid}
              alt="Image Gallery"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/purrfect-match/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purrfect Match
            <Image
              fluid={data.purrfectMatch.childImageSharp.fluid}
              alt="Purrfect Match"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/fullpage-js-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FullPage JS Demo
            <Image
              fluid={data.fullpageJsDemo.childImageSharp.fluid}
              alt="Fullpage JS Demo"
            />
          </a>
        </ProjectWrapper>
        <ProjectWrapper>
          <a
            href="https://navin-moorthy.github.io/component-pricing-plans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pricing Plans Component
            <Image
              fluid={data.pricingPlanComponent.childImageSharp.fluid}
              alt="Pricing Plan Component"
            />
          </a>
        </ProjectWrapper>
      </ProjectsWrapper>
    </Layout>
  </>
);

export default ProjectsPage;

ProjectsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired
};

export const query = graphql`
  query {
    jackFitnessStudio: file(
      relativePath: { eq: "projects/jack-fitness-studio.jpg" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crownClothing: file(relativePath: { eq: "projects/crown-clothing.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angularIssueTracker: file(
      relativePath: { eq: "projects/angular-issue-tracker.png" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angularRecipeBook: file(
      relativePath: { eq: "projects/angular-recipe-book.png" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    materializeBlog: file(
      relativePath: { eq: "projects/materialized-blog.png" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    patterns: file(relativePath: { eq: "projects/patterns.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vanuss: file(relativePath: { eq: "projects/vanuss.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    museumOfCandy: file(relativePath: { eq: "projects/museum-of-candy.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shrineMdnSite: file(relativePath: { eq: "projects/shrine-mdn-site.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vueAnimation: file(relativePath: { eq: "projects/vue-animation.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    colorGame: file(relativePath: { eq: "projects/color-game.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    patatapClone: file(relativePath: { eq: "projects/patatap-clone.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    toDoListBasic: file(relativePath: { eq: "projects/to-do-list-basic.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    behanceClone: file(relativePath: { eq: "projects/behance-clone.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ajaxToDoList: file(relativePath: { eq: "projects/ajax-to-do-list.png" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageGallery: file(relativePath: { eq: "projects/image-gallery.jpg" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    purrfectMatch: file(relativePath: { eq: "projects/purrfect-match.jpg" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yelpcamp: file(relativePath: { eq: "projects/yelpcamp.jpg" }) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fullpageJsDemo: file(
      relativePath: { eq: "projects/fullpage-js-demo.jpg" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pricingPlanComponent: file(
      relativePath: { eq: "projects/pricing-plan-component.jpg" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    githubCommitHistory: file(
      relativePath: { eq: "projects/redux-github-commits-history-chart.png" }
    ) {
      childImageSharp {
        fluid(traceSVG: { blackOnWhite: true }, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
