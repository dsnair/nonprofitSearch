import React from "react";
import isEmpty from "lodash/isEmpty";

import "./App.css";
import MyMap from "./MyMap";
import Form from "./Form";

const CITY = "Oakland";
const STATE = "CA";
const PAGE_SIZE = 10;

const CN_API_KEY = "d79dd1ad7b20120353f5874ed6cd13d2";
const APP_ID = "38f9f556";
const CN_URL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${APP_ID}&app_key=${CN_API_KEY}&state=${STATE}&city=${CITY}&pageSize=${PAGE_SIZE}`;

class App extends React.Component {
  state = {
    orgs: [],
    coords: [],
    error: false
  };

  componentDidMount() {
    const readFile = async file => {
      const request = await fetch(file);
      const fileContents = await request.json();
      this.setState({ coords: fileContents });
    };
    readFile("geocode.json");
  }

  handleClick = async event => {
    event.preventDefault();
    try {
      const request = await fetch(CN_URL);
      const response = await request.json();
      const nonprofits = response.map(org => ({
        name: org.charityName,
        ein: org.ein,
        classification: org.irsClassification.classification,
        cause: org.irsClassification.nteeType,
        street: org.mailingAddress.streetAddress1,
        state: org.mailingAddress.stateOrProvince,
        zipcode: org.mailingAddress.postalCode,
        website: org.websiteURL
      }));
      this.setState({
        orgs: nonprofits,
        error: false,
        response
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Form onClick={this.handleClick} />
        {!isEmpty(this.state.orgs) && <MyMap coords={this.state.coords} />}
      </React.Fragment>
    );
  }
}

export default App;
