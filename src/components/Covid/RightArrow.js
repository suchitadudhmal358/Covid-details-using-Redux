import React from "react";
import Slider from "react-slick";

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#424242",
        borderRadius: "50%",
        fontSize: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default RightArrow;
