import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import tw from "tailwind.macro";

// Components
import Layout from "../components/Layout";

// assets
import avatar from "../images/avatar.jpg";
import twitter from "../images/twitter.svg";
import github from "../images/github.svg";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";

const skills = [
  {
    name: "HTML",
    level: 80
  },
  {
    name: "CSS",
    level: 70
  },
  {
    name: "Javascript",
    level: 60
  },
  {
    name: "Gatsby",
    level: 70
  },
  {
    name: "NodeJs",
    level: 40
  },
  {
    name: "React",
    level: 30
  },
  {
    name: "Angular",
    level: 50
  },
  {
    name: "Vue",
    level: 20
  },
  {
    name: "Git & GitHub",
    level: 80
  },
  {
    name: "MongoDB",
    level: 60
  },
  {
    name: "GraphQL",
    level: 40
  }
];

const WorkExperiences = [
  {
    role: "Proofpoint - Email Security Analyst",
    company: "Wipro",
    period: "April 2018 - Present (1 year 2 months)",
    summary:
      "Worked mainly on ProofPoint Application(One of the best email security providers) with one of the best team members co-ordinating each other to deliver the best for the clients. Customer satisfications and deliveries are always met - receiving high appreciations",
    highlights: [
      "Certified Proofpoint Administrator",
      "In-depth knowledge about spam, phishing, spoof, bulk emails",
      "Good understanding of Email security concepts SPF, DKIM, DMARC",
      "Competent in powershell and linux scripting to provide automation in bigger tasks",
      "Competent in cryptographic protocols such as TLS and SSL",
      "Able to analyse raw email headers to find the root cause of an incident",
      "Enforced Mandatory TLS Policy between domains",
      "Enforced rules to prevent email Spoofing and phishing attempts",
      "Provided email security awarness for fellow partners",
      "Good experience in email security solutions - architecture and daily Operations",
      "Have expert knowledge of the Messaging & Collaboration environments in order to be routinely involved in root cause analysis whenever issues arise in the production environment.",
      "Effective in delivering solutions and providing speedy turn around when required"
    ]
  },
  {
    role: "Data Security Administrator",
    company: "Wipro",
    period: "Apri 2017 - March 2018 (1 year)",
    summary:
      "Started my carrer as a Security Administrator by learning and performing jobs on all the applications securing the data of a company. Learned about most of the Infrastructure Security Practices while giving my best in work",
    highlights: [
      "Good experience in Symantec EndPoint Security to provide support on all kinds of incidents",
      "In depth experience in Symantec Certification(now integrated into Digicert)",
      "Competent in creating CSR (Certificate Signing Request) with Private and Public keys for generating and  renewing certificates",
      "Experienced in Proofpoint - Email Security platform to maintain the email continuity and prevent email threats",
      "Competent Zscalar - Cloud Proxy Service Provider in which enforced rules to block malicious sites",
      "Worked and learned how RSA Secure ID works",
      "Worked on Cisco Identity Serivce Engine (ISE) to control the access given to the personals",
      "Little knowledge on Symantec DLP and Disk encryption platform",
      "Learned about how basic F5 - Loadbalancer and Cisco ASA Firewall works"
    ]
  }
];

const Educations = [
  {
    name: "St.Joseph's College of Engineering",
    degree: "Instrumentation and Control Engineering",
    place: "Chennai, TamilNadu, India",
    period: "2012 - 2016"
  }
];

const Interests = [
  "Coding",
  "Netflix",
  "Gaming",
  "Cricket",
  "Bug Bounty",
  "CTF"
];

const Languages = ["Tamil", "English"];

const ImageSocialContainer = tw.div`flex flex-col items-center justify-center`;

const Avatar = tw.img`rounded-full w-56 h-56 shadow-lg m-5`;

const IconContainer = tw.div`m-5`;

const Icon = tw.img`inline m-0 w-4 h-4 m-4`;

const IntroContainer = tw.div`my-5 font-sans`;

const SkillsContainer = tw.div`my-5 font-mono`;

const SkillContainer = tw.div`w-3/4 m-auto`;

const SkillName = tw.div`my-5`;

const SkillBar = styled.div`
  height: 16px;
  background-color: lightgrey;
  padding: 4px;
`;

const SkillBarLevel = styled.div`
  background: #ec407a;
  width: ${prop => prop.level || 0}%;
  height: 8px;
`;

const WorkExperiencesContainer = tw.div`my-5`;

const WorkExperienceContainer = tw.div`my-5`;

const EducationsContainer = tw.div`my-5`;

const EducationContainer = tw.div`my-5`;

const InterestsContainer = tw.div`my-5`;

const LanguagesContainer = tw.div`my-5`;

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
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
    <Layout siteTitle="About" to="/about" bio={false}>
      <ImageSocialContainer>
        <Avatar src={avatar} alt={author} />
        <IconContainer>
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
            href="https://www.linkedin.com/in/navinnavi19/"
            style={{ borderBottom: "unset" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a
            href={`https://www.facebook.com/${social.facebook}`}
            style={{ borderBottom: "unset" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={facebook} alt="FaceBook Logo" />
          </a>
        </IconContainer>
      </ImageSocialContainer>
      <hr />
      <IntroContainer>
        <h1>Intro</h1>
        <p>
          I did my first programming course in my school days and performed well
          and excelled at it. But back then I did not realize my love and
          passion for programming and got my degree in Instrumentation
          Engineering. After that I started working full time as a Cyber
          Security Analysts. Here I was again introduced to the latest web
          development technologies in order to understand the web penetration
          methods. At this stage, I realized that I am really passionate in
          learning web development than anything else.
        </p>
        <p>
          I started learning HTML, CSS and JS from scratch whenever I get some
          spare time. Then I was introduced to some amazing coding communities
          in Twitter. I started taking the #100DaysOfCode challenge to learn and
          log every single day. Now in almost 6 months, I learned a lot of new
          technologies and still persuing my coding passion without slowing down
          and learning every single day.
        </p>
      </IntroContainer>
      <hr />
      <SkillsContainer>
        <h1>Skills</h1>
        {skills.map(skill => (
          <SkillContainer key={skill.name}>
            <SkillName>{skill.name}</SkillName>
            <SkillBar>
              <SkillBarLevel level={skill.level} />
            </SkillBar>
          </SkillContainer>
        ))}
      </SkillsContainer>
      <hr />
      <h2 style={{ textAlign: "center" }}>
        <Link to="/projects">Web Developement Portfolio</Link>
      </h2>
      <hr />
      <h2 style={{ textAlign: "center" }}>
        <Link to="/blog">Publications</Link>
      </h2>
      <hr />
      <WorkExperiencesContainer>
        <h1>Work Experience</h1>
        {WorkExperiences.map(WorkExperience => (
          <WorkExperienceContainer key={WorkExperience.role}>
            <h2>{WorkExperience.role}</h2>
            <small>{WorkExperience.period}</small>
            <h3>{WorkExperience.company}</h3>
            <h4>Summary</h4>
            <p>{WorkExperience.summary}</p>
            <h4>Hightlights</h4>
            <ul>
              {WorkExperience.highlights.map(highlight => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <hr />
          </WorkExperienceContainer>
        ))}
      </WorkExperiencesContainer>
      <EducationsContainer>
        <h1>Education</h1>
        {Educations.map(education => (
          <EducationContainer key={education}>
            <h2>{education.degree}</h2>
            <h4>{education.name}</h4>
            <small>{education.period}</small>
            <p>{education.place}</p>
          </EducationContainer>
        ))}
      </EducationsContainer>
      <hr />
      <InterestsContainer>
        <h1>Interests</h1>
        <ul>
          {Interests.map(interest => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </InterestsContainer>
      <hr />
      <LanguagesContainer>
        <h1>Languages</h1>
        <ul>
          {Languages.map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </LanguagesContainer>
      <hr />
    </Layout>
  );
};
export default AboutPage;
