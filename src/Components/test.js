import React from "react";
import backdark1 from "./backlight.svg";
import backdark2 from "./backlight.svg";
import backdark3 from "./backdark.svg";

const Test = () => {
  const containerStyle = {
    width: "100vw", // 100% of the viewport width
    height: "50vh", // 100% of the viewport height
    position: "relative",
    marginTop:"-70px" // Set the container to relative positioning
  };

  const backgroundStyle1 = {
    backgroundImage: `url(${backdark1})`,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "100px 0",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };

  const backgroundStyle2 = {
    backgroundImage: `url(${backdark3})`,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "-100px 35px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };
  const backgroundStyle3 = {
    backgroundImage: `url(${backdark2})`,
    backgroundRepeat: "repeat-x",
    backgroundPosition: "10px 35px",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // Occupies the entire container width
    height: "100%", // Occupies the entire container height
  };

  return (
    
    <div style={containerStyle}>
      <div style={backgroundStyle1}></div>
      <div style={backgroundStyle2}></div>
      <div style={backgroundStyle3}></div>
      
    </div>
  );
};

export default Test;

