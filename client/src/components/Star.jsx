import React, { useState, useEffect } from "react";
import "../styles/star.css"; // Import the CSS file for styling
import starImg from "../assets/star.png";

const Star = () => {
  
  return (
    <div className="star"  >
      <img src={starImg} style={{ width: "40px" }} />
    </div>
  );
};

export default Star;

