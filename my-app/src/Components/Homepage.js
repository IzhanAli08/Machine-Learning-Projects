import React from 'react';
import styled from 'styled-components';
import ihp from '../images/IHP.PNG';
import overlord from '../images/overlord.PNG';
import h2w from '../images/h2w.PNG';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background-color: #f2f2f2;
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 300px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 75%; // This gives us a 4:3 aspect ratio
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

class Homepage extends React.Component {
  state = {
    projects: [
      {
        title: 'Project 1',
        imageUrl: ihp,
        description: 'Description 1',
      },
      {
        title: 'Project 2',
        imageUrl: overlord,
        description: 'Description 2',
      },
      {
        title: 'Project 3',
        imageUrl: h2w,
        description: 'Description 3',
      },
    ],
  };

  render() {
    return (
      <Container>
        <h1>View my Projects</h1>
        <ProjectContainer>
          {this.state.projects.map((project, index) => (
            <ProjectCard key={index}>
              <ImageContainer>
                <Image src={project.imageUrl} alt={project.title} />
              </ImageContainer>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
            </ProjectCard>
          ))}
        </ProjectContainer>
      </Container>
    );
  }
}

export default Homepage;
