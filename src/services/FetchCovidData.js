import React from "react";
import axios from "axios";

const FetchCovidData = () => {
  return axios
    .get("https://data.covid19india.org/data.json")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default FetchCovidData;
