import React from "react";
import InfoBox from "./InfoBox";
import "./index.scss";

const Info = ({ counters, active, onCounterClick }) => {
  const renderCounters = () => {
    let arr = [];
    for (const [key, value] of Object.entries(counters)) {
      if (key == active) {
        arr.push(
          <InfoBox
            infoKey={key}
            infoValue={value}
            active={active}
            onCounterClick={() => null}
          />
        );
      } else {
        arr.push(
          <InfoBox
            infoKey={key}
            infoValue={value}
            active="false"
            onCounterClick={onCounterClick}
          />
        );
      }
    }
    return arr;
  };
  return <div className="info">{renderCounters()}</div>;
};

export default Info;
