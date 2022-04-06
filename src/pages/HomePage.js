import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const HomePage = () => {
    return (
        <StyledHomePage>
            <Heading>Sonoma Safe</Heading>
            <Paragraph>In order for us to best support your needs, please refer to the menu on the right side of the page.</Paragraph>
            <StyledGit />
            <Link href="https://github.com/matth3wjc/Sonoma-safe" target = "_blank">Github</Link>
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
  margin: 0 0 0 10px;
  padding:0;
  
  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 1vw, 2vw);
  color: lightseagreen;
  font-weight: 400;
  margin: 30px 0 0 0;
  padding: 0;
  align-self: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const Link = styled.a`
  position: fixed;
  top: 85.5%;
  right: 86%;
  color: dodgerblue;
  text-decoration:none;
  font-size: clamp(1rem, 2.5vw, 4vw);
  transition: .2s all ease-in-out;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */

  &:hover {
    transition: .2s all ease-in-out;
    color: lightseagreen;
    cursor: pointer;
  }
`;

const StyledGit = styled(FaGithub)`
    position: fixed;
    top: 86.5%;
    right: 93%;
    min-height: 5vh;
    width: 5vw;
    color: dodgerblue;
`;

export default HomePage;