import React from 'react';
import styled from 'styled-components';



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #ffffff;
  color: black;
`;

const HeaderName = styled.h1`
  font-family: 'Arial', sans-serif;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavButton = styled.button`
  margin-right: 19px;
  color: black;
  text-decoration: underline;
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
  padding: 15px;
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
        <HeaderName>Stedify</HeaderName>
        <Navigation>
          <NavButton>Home</NavButton>
          <NavButton>About Us</NavButton>
          <NavButton>Topics</NavButton>
          <NavButton>Resources</NavButton>
          <NavButton>Contact Us</NavButton>
        </Navigation>
      </Header>

      <MainImage src={randomImage} alt="Random"/>

      <ProjectPreview>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 1"/>
          <ProjectDescription>Service 1</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 2"/>
          <ProjectDescription>Service 2</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="https://source.unsplash.com/random?coding" alt="Project 3"/>
          <ProjectDescription>Service 3</ProjectDescription>
        </ProjectCard>
      </ProjectPreview>

      <Footer>
        Â© {new Date().getFullYear()} Stedify. All rights reserved.
      </Footer>
    </div>
  );
};

export default HomePage;