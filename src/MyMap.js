import React from "react";
import { compose, withProps, withHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

const G_API_KEY = "AIzaSyDIHtFTYSqg9qoqi-Bn8fLUjIH02sC5ddU";

const MyMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${G_API_KEY}&v=3.exp`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer =>
      markerClusterer.getMarkers()
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: 37.8044, lng: -122.2711 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.coords.map(coord => (
        <Marker key={coord.ein} position={{ lat: coord.lat, lng: coord.lng }} />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

export default MyMap;
