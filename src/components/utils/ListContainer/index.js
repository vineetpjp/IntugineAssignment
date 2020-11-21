import React from "react";
import "./index.scss";

const ListContainer = (props) => {
  return (
    <div className="list-container" style={{ padding: props.padding }}>
      {props.children}
    </div>
  );
};

export default ListContainer;
