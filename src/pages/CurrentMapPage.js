import React from 'react';
import styled from 'styled-components';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export class Map extends React.Component {
    componentDidMount() {
        this.map = L.map('map', {
            center: [38.43, -122.72],
            zoom: 10,
            zoomControl: false
        });

        L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=c8qgD7mTebJDLNh2B9NEkfMlWE3a89nS75tATOd1553eBEBlJAssvu9KDN4MT0i3', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);

        // Raster Layer Overlay - Wildfire Risk
        var riskLayer = L.imageOverlay('riskMap.png',[[38.8851, -123.6670],[38.0902, -122.212]],{opacity:0.50}).addTo(this.map);

        var marker1 = L.marker([0, 0]);
        var marker2 = L.marker([0, 0]);
        var marker3 = L.marker([0, 0]);
        let markerCount = 0;

        // *************************************************************************************
        // Stephen you can use these variables for storing the user's marker data in the database
        let marker1lat, marker1lng, marker2lat, marker2lng, marker3lat, marker3lng;
        // *************************************************************************************

        marker1.addTo(this.map);
        marker2.addTo(this.map);
        marker3.addTo(this.map);

        // User is allowed to add 3 markers, if attempting to add a fourth, will override the first marker.
        this.map.on('click', function(e) {
            if (markerCount === 0)
            {
                marker1.setLatLng([e.latlng.lat, e.latlng.lng]).bindPopup(`${e.latlng.lat}, ${e.latlng.lng}`);
                marker1lat = e.latlng.lat;
                marker1lng = e.latlng.lng;
                markerCount++;
            } else if (markerCount === 1) {
                marker2.setLatLng([e.latlng.lat, e.latlng.lng]).bindPopup(`${e.latlng.lat}, ${e.latlng.lng}`);
                marker2lat = e.latlng.lat;
                marker2lng = e.latlng.lng;
                markerCount++;
            } else {
                marker3.setLatLng([e.latlng.lat, e.latlng.lng]).bindPopup(`${e.latlng.lat}, ${e.latlng.lng}`);
                marker3lat = e.latlng.lat;
                marker3lng = e.latlng.lng;
                markerCount = 0;
            }
            //console.log(`You just clicked the coordinates: ${e.latlng}`);
        } );

    }

    render(){
        return <Wrapper width="100%" height="90vh" id="map"  />
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
            <Heading>Wildfire Risk Map</Heading>
            <HLine />
            {/*<Paragraph>Here we will present a map of the current climate using the Windy API integration.</Paragraph>*/}

            <Map id ="map"/>

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

export default CurrentMapPage;