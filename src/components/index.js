import React from "react";
import Header from "components/Header";
import Info from "components/Info";
import Timeline from "./Timeline";
import Table from "./Table";

import "./index.scss";
const Intugine = () => {
  return (
    <>
      <Header />
      <Info />
      <div className="container">
        <Timeline />
        <Table />
      </div>
    </>
  );
};

export default Intugine;
