import React from "react";
import { ContainerOutline, ImageBackground } from "components/utils/index";
import List from "./List";

import Warehouse from "FrontendAssets/warehouse.svg";
import Destination from "FrontendAssets/destination.svg";

import "./index.scss";

const Timeline = () => {
  return (
    <ContainerOutline>
      <section className="timeline">
        <div className="timeline--destination">
          <img src={Destination} />
        </div>
        <div className="timeline--lists">
          <div>
            <List />
          </div>
          <div>
            <List />
          </div>
          <div>
            <List />
          </div>
          <div>
            <List />
          </div>
        </div>
        <div className="timeline--warehouse">
          <img src={Warehouse} className="timeline--warehouse" />
        </div>
      </section>
    </ContainerOutline>
  );
};

export default Timeline;
