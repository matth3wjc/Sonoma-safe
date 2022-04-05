import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <StyledHomePage>
            <Heading>Home Page</Heading>
            <Paragraph>This is where the map will be.</Paragraph>
        </StyledHomePage>
    )
}

const StyledHomePage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 4vw, 6vw);
  color: dodgerblue;
  font-weight: 700;
  margin: 0 0 0 1px;
  padding:0;
  
  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 1vw, 1vw);
  color: lightseagreen;
  font-weight: 300;
  margin: 0;
  padding:0;
  align-self: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

export default HomePage;