import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const G_API_KEY = "AIzaSyDIHtFTYSqg9qoqi-Bn8fLUjIH02sC5ddU";

const MyMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${G_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 37.8044, lng: -122.2711 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 37.8044, lng: -122.2711 }} />
    )}
  </GoogleMap>
));

export default MyMap;
