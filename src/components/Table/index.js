import React from "react";
import { ContainerOutline } from "components/utils/index";
import "./index.scss";
import List from "./List";

const Table = ({ currentStatusArr, updateTimelineStatus }) => {
  const renderList = () => {
    return currentStatusArr.map((item) => {
      return <List item={item} updateTimelineStatus={updateTimelineStatus} />;
    });
  };

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
              <td>
                AWB NUMBER
                <span>
                  <i
                    class="fa fa-angle-down"
                    aria-hidden="true"
                    style={{ fontSize: "1rem", color: "blue" }}
                  ></i>
                </span>
              </td>

              <td>TRANSPORTER</td>
              <td>SOURCE</td>
              <td>DESTINATION</td>
              <td>BRAND</td>
              <td>START DATE</td>
              <td>ETD</td>
              <td>STATUS</td>
            </tr>

            {renderList()}
            {/* </div> */}
          </table>
        </div>
      </ContainerOutline>
    </div>
  );
};

export default Table;
