import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import API from "./API_Interface/API_Interface";


let styles = `
    .clickedButton {
    background-color: greenyellow;
    color: white;
    
  min-height: 4.5vh;
  width: 6vw;
  margin: 10px 0 0 120px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
} 
`

let styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


function removeMarkers()
{
    // add functionality either here or on CurrentMapPage.js to reset markers
    // should delete the marker coordinates from the database
    async function deleteMarkers() {
        const api = new API();
        await api.addmarkers(sessionStorage.getItem('user'), 0, 0, 0, 0, 0, 0);
    }
    deleteMarkers();
    document.getElementById('clearButton').setAttribute("class", "clickedButton");
    document.getElementById('clearButton').setAttribute("value", "Markers cleared!");
}

function logout()
{
    // Need to clear the access token here
    window.location.href = "http://localhost:3000/";
}

const AccountPage = () => {
    /*
    document.querySelector('#clearButton').addEventListener('click', () => {
        document.querySelector('#clearButton').classList.add('clickedButton');
    })
     */

    return (
        <StyledAccountPage>
            <Heading>Your profile</Heading>
            <HLine />
            <Wrapper>
                <StyledLink to="/chPass">Change password</StyledLink>
                <StyledLink to="/chEmail">Change email</StyledLink>
                <StyledButton id='clearButton' type="submit" value="Clear Markers" onClick={removeMarkers}/>
                <StyledButton type="submit" value="Logout" onClick={logout}/>
            </Wrapper>
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

const Wrapper = styled.div`
  position: absolute;
  min-height: 30vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);

  border: dashed black 5px;
  
`;

const StyledLink = styled(Link)`
  color: #495159;
  text-decoration:none;
  font-size: clamp(1.5rem, 2.25vw, 3vw);
  padding: 20px 15px 20px 15px;
  line-height: 140%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  transition: .2s all ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */

  &:hover {
    transition: .2s all ease-in-out;
    color: lightseagreen;
  }
`;

const StyledButton = styled.input`
  min-height: 4.5vh;
  width: 6vw;
  //position: absolute;
  //left: 50%;
  margin: 10px 0 0 120px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: dodgerblue;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

export default AccountPage;
