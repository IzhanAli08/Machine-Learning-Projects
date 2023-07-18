// pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: justify;
  height: 100vh;  // this makes sure the content takes up the full height of the page
`;

const PortraitImage = styled.img`
  border-radius: 50%; // This makes the image round
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 20px;
`;

const AboutText = styled.div`
  max-width: 800px;
`;

const AboutPage = () => {
  const randomImage = "https://source.unsplash.com/random?portrait";

  return (
    <AboutContainer>
      <PortraitImage src={randomImage} alt="Portrait of Andy Chen" />
      <AboutText>
        <h1>Andy Chen</h1>
        <p>
          Welcome! My name is Andy Chen, and I'm a dual major in Computer Science and ITWS 
          at Rensselaer Polytechnic Institute, class of 2025. When I'm not deep in my studies, 
          you can find me on the quadball court, where I play for RPI's club team.
        </p>
        <p>
          Outside of academics and quadball, I have a broad range of interests. I love staying 
          active and working out, but I also enjoy downtime playing video games and watching TV. 
          I've also found joy in cooking and experimenting with different recipes. If you'd 
          like to learn more about my projects or experience, feel free to explore this site.
        </p>
      </AboutText>
    </AboutContainer>
  );
};

export default AboutPage;
