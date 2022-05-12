import React, {useState, useEffect, Fragment} from 'react';
import API from './API_Interface/API_Interface';
import styled from 'styled-components';

export default function LoginPage({setUser}) {
    const [userInput, setUserInput] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [verifyUser, setVerifyUser] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);

    const handleInputChange = event => {
        //console.log("handleInputChange called.");

        setUserInput(event.target.value);
        setAuthFailed(false);

        if(event.key === "Enter") {
            console.log("handleKeyPress: Verify user input.");
            setVerifyUser(true);
        }
    };

    const handlePassword = event => {
        //console.log("handleInputChange2 called.");

        setUserPassword(event.target.value);
        setAuthFailed(false);

        if(event.key === "Enter") {
            console.log("handleKeyPress: Verify user input.");
            setVerifyUser(true);
        }
    };

    useEffect(() => {

        if( ! verifyUser || userInput.length === 0)
           return;

        const api = new API();
        async function getUserInfo() {
            api.getUserInfo(userInput, userPassword)
                .then( userInfo => {
                    console.log(`api returns user info and it is: ${JSON.stringify(userInfo)}`);
                    sessionStorage.setItem('user', userInput);
                    sessionStorage.setItem('userPassword', userPassword);
                    const user = userInfo.user;
                    if( userInfo.status === "OK" && userInfo.user.password === userPassword) {
                        console.log("signed in");
                        setUser(user);
                    } else  {
                        api.addUser(userInput, userPassword);
                        console.log("new account created");
                        setVerifyUser(false);
                        setAuthFailed(true);
                    }
                });
        }
        getUserInfo();
        window.location.href = "http://localhost:3000/account";
    }, [verifyUser, setUser, userInput, userPassword]);

    return (
        <StyledLoginPage>
            <Heading>Sonoma Safe</Heading>
            <HLine noshade />
            <Paragraph>Please Log In</Paragraph>
            <StyledDialogBox>
                <StyledInputBox type="email" id="email" placeholder="Email..." error={authFailed} onChange={handleInputChange} value={userInput}/>
                <StyledInputBox type="password" id="password" placeholder="Password..." error={authFailed} onChange={handlePassword} value={userPassword}/>
                <StyledButton type="submit" value="Login" onClick={() => {setVerifyUser(true)}}/>
            </StyledDialogBox>
        </StyledLoginPage>
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

const StyledLoginPage = styled.div`
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
  font-size: clamp(2rem, 3vw, 6vw);
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