import React, { useState, useEffect } from "react";
import { ContainerOutline } from "components/utils/index";
import "./index.scss";
import List from "./List";

const Table = ({ currentStatusArr, updateTimelineStatus }) => {
  const [activeList, setActiveList] = useState("");
  const updateActiveList = (code) => {
    setActiveList(code);
  };
  useEffect(() => {
    if (currentStatusArr.length) {
      const code = currentStatusArr[0].awbno;
      updateActiveList(code);
    }
  }, [currentStatusArr]);
  const renderList = () => {
    return currentStatusArr.map((item, index) => {
      return (
        <List
          activeList={activeList}
          updateActiveList={updateActiveList}
          key={index}
          item={item}
          updateTimelineStatus={updateTimelineStatus}
        />
      );
    });
  };

  return (
    <div className="table-container">
      <ContainerOutline>
        <div className="table-lists">
          <table id="table" className="table-list-container">
            <thead>
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
            </thead>
            <tbody>{renderList()}</tbody>
          </table>
        </div>
      </ContainerOutline>
    </div>
  );
};

export default Table;
