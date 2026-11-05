import React from "react";

const GooglyEyeBlank = props => {
  return (
    <svg
      className="GooglyEyeBlank"
      width={props.eyeSize}
      height={props.eyeSize}
    >
      <rect x="0" y="0" width={props.eyeSize} height={props.eyeSize} />
    </svg>
  );
};

export default GooglyEyeBlank;
