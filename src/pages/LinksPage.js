import React from 'react';
import styled from 'styled-components';

const LinksPage = () => {
    return (
        <StyledLinksPage>
            <Heading>Additonal Links</Heading>
        </StyledLinksPage>
    )
}

const StyledLinksPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: dodgerblue;
  font-weight: 700;
  margin: 0;
  padding:0;
  
  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

export default LinksPage;