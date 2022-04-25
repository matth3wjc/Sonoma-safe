import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Menu = ({handleNavToggle}) => {
    return (
        <div>
            <StyledMenu>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/account">Profile</StyledLink>
                <StyledLink to="/past">Risk Map</StyledLink>
                <StyledLink to="/current">Climate Map</StyledLink>
                <StyledLink to="/links">Links</StyledLink>
                <CloseToggle onClick={handleNavToggle}/>
            </StyledMenu>
        </div>
    )
}

export default Menu

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 55vh;
  width: 100%;
  @media screen and (min-width: 790px) {
    width: 18%
  }
  background-color: rgba(10,10,10,.60);
  z-index: 99;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CloseToggle = styled(FaTimes)`
  position: fixed;
  top: 5%;
  right: 4%;
  background: rgba(10,10,10,.60);
  color: #495159;
  padding: .75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;