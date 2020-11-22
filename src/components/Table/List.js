import React from "react";

const List = ({ item, updateTimelineStatus, activeList, updateActiveList }) => {
  const {
    awbno,
    carrier: transporter,
    from: source,
    to: destination,
    carrier: brand,
    pickup_date,
    current_status,
    scan,
  } = item;
  if (item.extra_fields) {
    var { expected_delivery_date } = item.extra_fields;
  } else {
    expected_delivery_date = "";
  }
  if (!awbno) return null;

  return (
    <tr
      className={
        awbno == activeList
          ? "table-list border_bottom table-list-active"
          : "table-list border_bottom"
      }
      onClick={() => {
        updateTimelineStatus(scan, awbno);
        updateActiveList(awbno);
      }}
    >
      <td className="table-border-left">{awbno}</td>
      <td>{transporter}</td>
      <td>{source}</td>
      <td>{destination}</td>
      <td>{brand}</td>
      <td>{pickup_date}</td>
      <td>{expected_delivery_date}</td>
      <td
        className="table-border-right"
        style={{ color: " rgba(39, 156, 39, 0.575)" }}
      >
        {current_status}
      </td>
    </tr>
  );
};

export default List;
