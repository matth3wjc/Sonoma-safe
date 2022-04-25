import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <StyledHomePage>
            <Heading>Sonoma Safe</Heading>
            <HLine noshade />
            <Paragraph>In order for us to best support your needs, please refer to the menu on the right side of the page.</Paragraph>
            <Paragraph>Or, click the button below to sign up or login.</Paragraph>

            <StyledButton to="/login">Login</StyledButton>

            <StyledGit />
            <HyperLink href="https://github.com/matth3wjc/Sonoma-safe" target = "_blank">Github</HyperLink>
        </StyledHomePage>
    )
}

const StyledButton = styled(Link)`
  min-height: 3vh;
  width: 4vw;
  margin: 35px 0 0 0;

  font: bold 20px Arial;
  text-decoration: none;
  text-align: center;
  //background-color: #EEEEEE;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #CCCCCC;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #CCCCCC;
  
  background-color: dodgerblue;
  align-self: center;
  //justify-content: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

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

const HLine = styled.hr`
  min-height: 0.5vh;
  width: 99.5%;
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

const HyperLink = styled.a`
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