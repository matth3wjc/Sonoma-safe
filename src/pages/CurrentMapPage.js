import React from 'react';
import styled from 'styled-components';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [38.43, -122.72],
            zoom: 12.5,
            zoomControl: false
        });

        L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=c8qgD7mTebJDLNh2B9NEkfMlWE3a89nS75tATOd1553eBEBlJAssvu9KDN4MT0i3', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);
    }

    render(){
        return <Wrapper width="1280px" height="720px" id="map"  />
    }
}

/*
const options = {
    // Required: API key
    key: 'xGna9em51h9r7n8UOFpxZV7YTyzVEsz9', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    // L.popup()
    //     .setLatLng([50.4, 14.3])
    //     .setContent('Hello World')
    //     .openOn(map);
});
*/

const CurrentMapPage = () => {
    return (
        <StyledCurrentMapPage>
            <Heading>Present Climate Map</Heading>
            {/*<Paragraph>Here we will present a map of the current climate using the Windy API integration.</Paragraph>*/}

            <Map />

            {/*<Paragraph>Bottom of Map</Paragraph>*/}

        </StyledCurrentMapPage>
    )
}

const StyledCurrentMapPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  #Map {
    width: 90%;
    height: 300px;
  }
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

export default CurrentMapPage;