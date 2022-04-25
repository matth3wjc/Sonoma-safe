import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const AccountPage = () => {
    return (
        <StyledAccountPage>
            <Heading>Your profile</Heading>
            <HLine />
            <StyledLink to="/chPass">Change password</StyledLink>
            <StyledLink to="/chEmail">Change email</StyledLink>
        </StyledAccountPage>
    )
}

const StyledAccountPage = styled.div`
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
  padding: 0;
  
  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const HLine = styled.hr`
  min-height: 0.5vh;
  width: 99.5%;
`;

const StyledLink = styled(Link)`
  color: #495159;
  text-decoration:none;
  font-size: clamp(2rem, 3vw, 5vw);
  line-height: 140%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: .2s all ease-in-out;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */

  &:hover {
    transition: .2s all ease-in-out;
    color: lightseagreen;
  }
`;

export default AccountPage;
