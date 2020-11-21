import React from "react";
import "./index.scss";
const ImageBackground = (props) => {
  return (
    <div
      className="image-background-circle"
      style={{ backgroundColor: props.bckcolor }}
    >
      {props.children}
    </div>
  );
};

export default ImageBackground;
