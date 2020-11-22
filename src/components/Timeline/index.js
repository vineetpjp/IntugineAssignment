import React from "react";
import { ContainerOutline } from "components/utils/index";
import List from "./List";

import Warehouse from "FrontendAssets/warehouse.svg";
import Destination from "FrontendAssets/destination.svg";

import "./index.scss";

const Timeline = ({ timelineStatus }) => {
  const renderList = () => {
    if (!timelineStatus) {
      return <List location="location" time="0000-00-00 00:00:00" />;
    }
    return timelineStatus.map((item, index) => {
      return (
        <div key={index}>
          <List key={index} {...item} active="false" index={index} />
        </div>
      );
    });
  };
  return (
    <div className="timeline-container">
      <ContainerOutline>
        <section className="timeline">
          <div className="timeline--destination">
            <img src={Destination} />
          </div>
          <div className="timeline--lists">{renderList()}</div>
          <div className="timeline--warehouse">
            <img src={Warehouse} className="timeline--warehouse" />
          </div>
        </section>
      </ContainerOutline>
    </div>
  );
};

export default Timeline;
