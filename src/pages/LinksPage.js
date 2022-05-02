import React from 'react';
import styled from 'styled-components';

/*
const DataController = new (require('../../app/Controllers/DataController'))();

let stations = new Array();

async function getStationNumbers() {
    try {
        let result = await DataController.fetchStationNumbers();
        for(let s of result){
            stations.push(s);
        }
    } catch(e) {
        console.log(`Access denied or no entries found!: ${e}`);
    }
}

async function findTemp(station) {
    try {
        let result = await DataController.fetchTemp(station);
    } catch(e) {
        console.log(`Access denied or no entries found!: ${e}`);
    }
}

async function testDatabase(station) {
    try {
        let result = await DataController.fetchData(station);
        if (result.length > 0)
            console.log(result);

    } catch (e) {
        console.log(`The database could not be found!: ${e}`);
    }
}

void function printTemps() {
    for (let i=0; i < stations.length; i++)
    {
        console.log(`The average temperature for ${stations[i]} is: ${findTemp(stations[i])}\n`);
    }
}
*/

const LinksPage = () => {
    return (
        <StyledLinksPage>
            <Heading>Additonal Links</Heading>
            <HLine />
            <button onClick="testDatabase('US1CASN0139')">test</button>
        </StyledLinksPage>
    )
}

const StyledLinksPage = styled.div`
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

export default LinksPage;