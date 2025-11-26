import React from "react";
import './toggle.css'

// import React, { useState } from "react"; 

const ToggleSwitch = (props) => {
  // yahi pe state banayenge
  return (
    <div onClick={props.onClick}>
      Toggle Switch
    </div>
  );
};

export default ToggleSwitch;
