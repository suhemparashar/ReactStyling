//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const hour = d.getHours();

const customStyle = {
  color: "red"
};

let phase = "";
if (hour >= 0 && hour < 12) {
  phase = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  phase = "Good Afternoon";
  customStyle.color = "green";
} else {
  phase = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={customStyle}>{phase}</h1>,
  document.getElementById("root")
);
