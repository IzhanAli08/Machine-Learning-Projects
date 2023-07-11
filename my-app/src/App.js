import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #282c34;
  color: white;
`;

const HeaderName = styled.h1`
  font-family: 'Arial', sans-serif;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavButton = styled.button`
  margin-right: 20px;
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
`;

const MainImage = styled.img`
  width: 100%;
`;

const ProjectPreview = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const ProjectCard = styled.div`
  width: 30%;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectDescription = styled.p`
  padding: 10px;
`;

const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: #282c34;
  color: white;
`;

const HomePage = () => {
  const randomImage = "https://source.unsplash.com/random"; // fetches a random image from Unsplash

  return (
    <div>
      <Header>
        <HeaderName>Your Name</HeaderName>
        <Navigation>
          <NavButton>Home</NavButton>
          <NavButton>About Me</NavButton>
          <NavButton>Projects</NavButton>
          <NavButton>Experience</NavButton>
        </Navigation>
      </Header>

      <MainImage src={randomImage} alt="Random"/>

      <ProjectPreview>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 1"/>
          <ProjectDescription>Project 1: A short description of the project goes here.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 2"/>
          <ProjectDescription>Project 2: A short description of the project goes here.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 3"/>
          <ProjectDescription>Project 3: A short description of the project goes here.</ProjectDescription>
        </ProjectCard>
      </ProjectPreview>

      <Footer>
        Â© {new Date().getFullYear()} Your Name. All rights reserved.
      </Footer>
    </div>
  );
};

export default HomePage;