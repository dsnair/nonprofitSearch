import React from "react";
import isEmpty from "lodash/isEmpty";

import MyMap from "./MyMap";
import Form from "./Form";
import "./App.css";

const CITY = "Oakland";
const STATE = "CA";
const PAGE_SIZE = 5;

const CN_API_KEY = "d79dd1ad7b20120353f5874ed6cd13d2";
const APP_ID = "38f9f556";
const URL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${APP_ID}&app_key=${CN_API_KEY}&state=${STATE}&city=${CITY}&pageSize=${PAGE_SIZE}`;

class App extends React.Component {
  state = {
    response: {},
    error: false
  };
  handleClick = async event => {
    event.preventDefault();
    try {
      const request = await fetch(URL);
      const response = await request.json();
      this.setState({
        response,
        error: false
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form onClick={this.handleClick} />
        {!isEmpty(this.state.response) && (
          <MyMap isMarkerShown className="Map" />
        )}
      </React.Fragment>
    );
  }
}

export default App;
