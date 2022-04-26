import React, {Component, useMemo} from 'react';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";
import {DivIcon} from "leaflet/dist/leaflet-src.esm";

const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 38.43,
    lng: -122.72
};

const PastMapPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAFp3eCYG4fBkiGj6bu5G3uazkfWFQ2hcw",
    })

    if (!isLoaded)
        return <div>Loading...</div>;

    return (
        <StyledPastMapPage>
            <Heading>Wildfire Risk Map</Heading>
            <HLine />
            {/*<Paragraph1>Here we will display a map overlayed with color based on fire risk in a particular region.</Paragraph1>*/}

            <GoogleMap
                zoom={12}
                center={center}
                mapContainerStyle={mapContainerStyle}>
            </GoogleMap>;

            {/*<Paragraph2>To calculate this risk, we will be using historical climate data from local climate stations.</Paragraph2>*/}
        </StyledPastMapPage>
    )
}

const StyledPastMapPage = styled.div`
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

const Paragraph1 = styled.p`
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

const Paragraph2 = styled.p`
  font-size: clamp(1rem, 1vw, 2vw);
  color: lightseagreen;
  font-weight: 400;
  margin: 5px 0 0 0;
  padding: 0;
  align-self: center;

  user-select: none;  /* supported by Chrome and Opera */
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none;  /* Internet Explorer/Edge */
`;

export default PastMapPage;
