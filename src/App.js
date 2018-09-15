import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./Map";
import InfoWindow from "./InfoWindow";
import "./App.css";

class App extends Component {
  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    infoWindow.addListener("domready", e => {
      render(<InfoWindow />, document.getElementById("infoWindow"));
    });
    infoWindow.open(map);
  }

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 37.8044, lng: -122.2711 },
          zoom: 14
        }}
        onMapLoad={map => {
          const marker = new window.google.maps.Marker({
            position: { lat: 37.8044, lng: -122.2711 },
            map: map
          });
          marker.addListener("click", e => {
            this.createInfoWindow(e, map);
          });
        }}
      />
    );
  }
}

export default App;
