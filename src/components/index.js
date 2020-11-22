import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Info from "components/Info";
import Timeline from "./Timeline";
import Table from "./Table";

import fetchData from "Network/index";
import "./index.scss";
const Intugine = () => {
  const [data, setData] = useState([]);
  const [counters, setCounters] = useState({
    DEL: 0,
    INT: 0,
    OOD: 0,
    DEX: 0,
    NFI: 0,
    UND: 0,
  });
  const [activeCounter, setActiveCounter] = useState("DEL");
  const [currentStatusArr, setCurrentStatusArr] = useState([]);
  const [timelineStatus, setTimelineStatus] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    count();
  }, [data]);

  useEffect(() => {
    updateCurrentList(activeCounter);
  }, [activeCounter, data]);

  const getData = async () => {
    const response = await fetchData();
    setData(response.data);
  };

  const count = () => {
    let counts = { DEL: 0, INT: 0, OOD: 0, DEX: 0, NFI: 0, UND: 0 };
    data.forEach((item) => {
      counts[item.current_status_code]++;
    });

    setCounters(counts);
  };

  const updateTimelineStatus = (scan) => {
    setTimelineStatus(scan);
  };

  const updateCurrentList = (active) => {
    let currentStatus = [];
    data.forEach((item) => {
      if (item.current_status_code === active) {
        currentStatus.push(item);
      }
    });
    setCurrentStatusArr(currentStatus);
    if (currentStatus.length) {
      setTimelineStatus(currentStatus[0].scan);
    }
  };

  const onCounterClick = (item) => {
    setActiveCounter(item);
  };

  return (
    <>
      <Header />
      <Info
        counters={counters}
        active={activeCounter}
        onCounterClick={onCounterClick}
      />
      <div className="container">
        <Timeline timelineStatus={timelineStatus} />
        <Table
          currentStatusArr={currentStatusArr}
          updateTimelineStatus={updateTimelineStatus}
        />
      </div>
    </>
  );
};

export default Intugine;
