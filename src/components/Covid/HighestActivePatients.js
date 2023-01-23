import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import CovidPatient from "./CovidPatient";
import { Typography } from "@mui/material";

const HighestActivePatients = () => {
  const stateData = useSelector((state) => state.covidReducer);
  const stateWise = stateData.statewise;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        width: "80%",
      }}
    >
      <Typography
        variant="h6"
        align="left"
        sx={{
          my: 2,

          fontWeight: 600,
          borderBottom: "1px solid #808080",
        }}
      >
        Highest Active Patients
      </Typography>

      <Slider {...settings}>
        {stateWise
          .sort((a, b) => b.active - a.active)
          .slice(1, 11)
          .map((state, index) => (
            <div key={index}>
              <CovidPatient state={state} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HighestActivePatients;
