import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  ProjectsLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";

const About = ({ history }) => {
    const [animateProjects, setAnimateProjects] = useState(false);
    const [animateHome, setAnimateHome] = useState(false);
  
    useEffect(() => {
      animateProjects &&
        setTimeout(() => {
          setAnimateProjects(false);
          history.push("/projects");
        }, 400);
      animateHome &&
        setTimeout(() => {
          setAnimateHome(false);
          history.push("/");
        }, 400);
    }, [animateProjects, animateHome, history]);
  
    // const usa = require("../images/BpMillerImg.jpg");

    return (
        <Wrapper>
          <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
            <HomeText>Home</HomeText>
          </HomeLink>
          <Body>
            {/* <ImageBackground backgroundImage={usa}>
              <Overlay />
            </ImageBackground> */}
            <Container>
              <Hero>
                <Heading>Who am I?</Heading>
                <Subtitle>
                  
            I am a Full Stack Developer - <br />
            My interests include technology, research, music, social impact, and food.
            I am a highly motivated, driven self-starter with a knack for getting things done. 
            I value intelligence, decisiveness and vision, in both employees and managers. I'm comfortable in companies both large and small, where I can make a big impact on a steady basis.
            I have interest to work on a team with great programmers where I can collaborate and build out great ideas.
            I like to jump right in, work quickly, and deliver consistently. I come from a background in Biological Anthropology and Food Studies. I have experience building quality websites and applications with HTML, CSS, and JavaScript.
            My additional areas of expertise are Food Policy, Biological Sciences, People and Operations Management, and User Research.
              
                
                </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <DetailBlock>
                <RoleTime>
                    <Role>Fullstack Software Engineer, Consulting, Services</Role>
                    <Time>February 2021 - Present</Time>
                </RoleTime>
                <Client>Freelance, Open to new opportunities</Client>
                <DetailPoint>
                    Fullstack Developer | Consultant | Scrum Master
                </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                <RoleTime>
                    <Role>Project Manager</Role>
                    <Time>March 2021 - Present</Time>
                </RoleTime>
                <Client>Gesture</Client>
                <DetailPoint>
                    Drive impact through strong executive communication skills and leadership presence <br />
                    Implement Agile methodologies using a Scrum framework throughout the organization from executives to software <br />
                    Communicate proactively to cross-functional partners, prepare formal recurring communications, and present to people at all levels of the organization <br />
                    Led all sprint planning, sprint reviews,sprint retrospectives, and daily scrums with the development and product team resulting in product features that reached all users <br />
                    Knowledge of Agile frameworks such as Scrum, Kanban, and others from which to draw practices that can be leveraged to help make the team successful <br />
                    Worked closely with product management, business and technical stakeholders to clarify the schedule, status, and details of each project 
                </DetailPoint>
                </DetailBlock>  
                <DetailBlock>
                <RoleTime>
                    <Role>Back End Developer Intern </Role>
                    <Time>March 2021 - April 2021</Time>
                </RoleTime>
                <Client>Gesture</Client>
                <DetailPoint>
                    Collaborate with front-end engineers and team members to design codes that will help enhance user experience <br />
                    Analyze data and codes to reduce errors and identify areas that need improvement <br />
                    Develop new ideas that improve code performance and efficiency <br />
                    Coordinate department needs and make suggestions regarding its technical direction <br />
                    Google Firebase Cloud to write functions and deploy code
                </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                <RoleTime>
                    <Role>Site Manager</Role>
                    <Time>March 2019 - February 2021</Time>
                </RoleTime>
                <Client>Instacart, Operations</Client>
                <DetailPoint>
                    Manage projects such as new store launch initiatives and new geography launches, such as Cape Cod. <br />
                    Provide actionable insights leveraging tools such as Periscope, G-sheets, and KPI dashboards. <br />
                    Contributed member feedback and reviewed documentation for modules to be used in Instacart Shopper Lessonly. <br />
                    Instructor, Developed lesson plan and course material for NNE - U Course, Productivity and Time Management
                </DetailPoint>
                </DetailBlock>
                </ExperienceContainer>
                <ExperienceContainer>
                <ExperienceTitle>EDUCATION</ExperienceTitle>
                <DetailBlock>
                <RoleTime>
                    <Role>Fullstack Flex Software Engineering Certificate</Role>
                    <Time>2021</Time>
                </RoleTime>
                <Client>Thinkful</Client>
                <DetailPoint />
                </DetailBlock>
                <DetailBlock>
                <RoleTime>
                    <Role>MLA, Gastronomy (Food Systems &amp; Food Policy)	</Role>
                    <Time>January 2017</Time>
                </RoleTime>
                <Client>Boston University</Client>
                <DetailPoint>
                    Dr. Ellen Rovener Spring 2015 Topic: Workplace Ethnography || Examining Gender, Race, and Ethnicity at Work
                    Dr. Karen Matheny Fall 2014 Topic: Paleolithic Diet || Is the Paleolithic Diet Better Suited for Humans than the Modern Diet?
                    Organizations: Branch Food Community Member, Gastronomy Student Association, Graduate Christian Fellowship
                </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                <RoleTime>
                    <Role>BS, Anthropology &amp; Integrative Biology</Role>
                    <Time>June 2014</Time>
                </RoleTime>
                <Client>University of Illinois at Urbana - Champaign</Client>
                <DetailPoint>
                Senior Thesis under Dr. Brenda Farnell || Topic: Are you what you eat: An examination of Food and Culture in University Dining
                Student Researcher under Dr. Paul Garber || Topic: Age and sex based differences in diet and activity budget in White-Faced Capuchin Monkeys <br />
                Awards and honors: Lambda Alpha Academic Scholar UIUC
                Organizations: Transfer Advisory Group Mentor, Tzu Chi Collegiate Association Member and Volunteer
                </DetailPoint>
                </DetailBlock>
                </ExperienceContainer>
                <ExperienceContainer>
                 <ExperienceTitle>SKILLS</ExperienceTitle>
                <DetailBlock>
                    <Role>Languages and Technologies</Role>
                 <DetailPoint>
                    Javascript, HTML5, CSS3, Node.js, Express, React
                 </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                    <Role>Data Analytics</Role>
                 <DetailPoint>
                SQL, postgreSQL, Excel, Periscope, pgAdmin
                </DetailPoint>
                </DetailBlock>
                <DetailBlock>              
                <Role>Developer Tools</Role>
                 <DetailPoint>
                Git, GitHub, Vercel, Heroku
                 </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                    <Role>Business Intelligence</Role>
                 <DetailPoint>
                Strategic Thinking, Lean Management, Data Analysis: trends and patterns, Researching solutions to user problems, Managing relationships with vendors, Consulting, Food Policy
                 </DetailPoint>
                </DetailBlock>
                <DetailBlock>
                    <Role>Professional Development</Role>
                 <DetailPoint>
                 Mentorship and Coaching, Leadership, Team Building
                 </DetailPoint>
                </DetailBlock>
                </ExperienceContainer>
            </Container>
        </Body>
        <ProjectsLink onClick={() => setAnimateProjects(true)} animating={animateProjects}>
            <TextLink>Take a look at some of my work!</TextLink>
     </ProjectsLink>
     </Wrapper>
    );
};

export default withRouter(About);