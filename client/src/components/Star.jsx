import React, { useState, useEffect } from "react";
import "../styles/star.css"; // Import the CSS file for styling
import starImg from "../assets/star.png";

// const instance = Axios.create({
//   withCredentials: true,
// });
const Star = ({ star }) => {
  

  const handleClick = () => {
    // instance
    //   .get("http://localhost:8000/allstar")
    //   .then((res) => {
    //     console.log(res.data);
    //     set
    //   })
    //   .catch((err) => {console.log(err)});
  };
  return (
    <div className="star"  >
      <img src={starImg} style={{ width: "40px" }} />
    </div>
  );
};

export default Star;

// const starStyle = {
//   width:"40px"
// }
