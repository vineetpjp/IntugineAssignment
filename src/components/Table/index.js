import React from "react";
import { ContainerOutline } from "components/utils/index";
import "./index.scss";
import List from "./List";

const Table = () => {
  return (
    <div className="table-container">
      <ContainerOutline>
        {/* <table class="table"> */}
        <div className="table-lists">
          <table id="table" className="table-list-container">
            {/* <div className="table-lists"> */}
            {/* <tr className="table--header"> */}
            {/* <div> */}
            <tr className="table--header">
              <td>AWB NUMBER</td>
              <td>TRANSPORTER</td>
              <td>SOURCE</td>
              <td>DESTINATION</td>
              <td>BRAND</td>
              <td>START DATE</td>
              <td>ETD</td>
              <td>STATUS</td>
            </tr>

            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            {/* </div> */}
          </table>
        </div>
      </ContainerOutline>
    </div>
  );
};

export default Table;
