import React from "react";
import { ListContainer } from "components/utils";

const List = () => {
  return (
    // <ListContainer padding="1rem 0.5rem">
    // <tr className="table-list-container table-list-items">
    <tr className="table-list border_bottom">
      <td className="table-border-left">#273126375</td>
      <td>DTDC</td>
      <td>Bangalore</td>
      <td>Delhi</td>
      <td>USPA</td>
      <td>01/07/2019</td>
      <td>01/07/2019</td>
      <td
        className="table-border-right"
        style={{ color: " rgba(39, 156, 39, 0.575)" }}
      >
        Delivered
      </td>
    </tr>
    // </ListContainer>
  );
};

export default List;
