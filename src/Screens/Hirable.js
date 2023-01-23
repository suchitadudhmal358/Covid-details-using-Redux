import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FetchCovidData from "../services/FetchCovidData";
import PatientsList from "../components/Covid/PatientsList";
import HighestActivePatients from "../components/Covid/HighestActivePatients";
import HighestDeaths from "../components/Covid/HighestDeaths";
import ProgressBar from "../components/ProgressBar";
import { STATEWISE_COVID_DATA } from "../action/action-types";
import { Outlet } from "react-router-dom";

const Hirable = () => {
  const [covidData, setCovidData] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(loading);
    const fetchCovideData = async () => {
      const data = await FetchCovidData();
      setLoading(false);
      dispatch({ type: "STATEWISE_COVID_DATA", payload: data });
      setCovidData(data);
    };
    fetchCovideData();
  }, []);
  return (
    <div style={{ marginTop: "50px", textAlign: "center", padding: "20px" }}>
      {loading ? (
        <ProgressBar />
      ) : (
        <div>
          <PatientsList />
          <HighestActivePatients />
          <HighestDeaths />
        </div>
      )}
    </div>
  );
};

export default Hirable;
