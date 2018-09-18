const fetch = require("node-fetch");
const jsonfile = require("jsonfile");

const city = "Oakland";
const state = "CA";
const pageSize = 10;

// API Keys
const cnKey = "d79dd1ad7b20120353f5874ed6cd13d2";
const cnId = "38f9f556";
const gKey = "AIzaSyDIHtFTYSqg9qoqi-Bn8fLUjIH02sC5ddU";

// API URLs
const cnURL = `https://api.data.charitynavigator.org/v2/Organizations?app_id=${cnId}&app_key=${cnKey}&state=${state}&city=${city}&pageSize=${pageSize}`;
const geocodeURL = address =>
  `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${gKey}`;

const fetchData = async url => {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCoords = nonprofits => {
  const promises = nonprofits.map(async nonprofit => {
    try {
      const street = nonprofit.mailingAddress.streetAddress1;
      const zip = nonprofit.mailingAddress.postalCode;
      const address = encodeURI(`${street}, ${city}, ${state}, ${zip}`);
      const response = await fetchData(geocodeURL(address));
      return { ein: nonprofit.ein, ...response.results[0].geometry.location };
    } catch (error) {
      console.log(error);
    }
  });
  return Promise.all(promises);
};

const geocode = async () => {
  try {
    const nonprofits = await fetchData(cnURL);
    const coords = await getCoords(nonprofits);
    jsonfile.writeFile("../public/geocode.json", coords, {
      spaces: 2,
      EOL: "\r\n"
    });
  } catch (error) {
    console.log(error);
  }
};

// Run the program
geocode();
