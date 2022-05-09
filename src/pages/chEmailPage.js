import React from 'react';
import styled from 'styled-components';
import API from './API_Interface/API_Interface';


async function handleSubmit() {
    const api = new API();
    await api.addUser(document.getElementById("email"));

    // Have to remove based on current session, maybe store it as a session variable?
    // unless we can get it from token which idk
    // - Matt
    await api.removeUser();
}

const EmailPage = () => {
    return (
        <StyledChangeEmailPage>
            <Heading>Sonoma Safe</Heading>
            <HLine noshade />
            <Paragraph>Please Enter A New Email</Paragraph>
            <StyledDialogBox onSubmit={handleSubmit}>
                <StyledInputBox type="email" id="email" placeholder="New email..."/>
                <StyledButton type="submit" value="Change Email"/>
            </StyledDialogBox>
        </StyledChangeEmailPage>
    )
}

const StyledDialogBox = styled.form`
  min-height: 40vh;
  width: 30vw;
  background-color: #282c34;
  border: 5px solid lightslategray;
  align-self: center;
  margin: 100px 0 0 0;  

  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
`;

const StyledInputBox = styled.input`
  font-size: clamp(1rem, 1vw, 2vw);
  color: black;
  font-weight: 400;
  margin: 20px 0 0 0;
  align-self: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const StyledButton = styled.input`
  min-height: 4.5vh;
  width: 6vw;
  margin: 35px 0 0 0;
  
  background-color: dodgerblue;
  align-self: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

const StyledChangeEmailPage = styled.div`
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

export default EmailPage;