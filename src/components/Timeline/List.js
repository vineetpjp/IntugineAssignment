import React from "react";
import { ListContainer } from "components/utils";

const List = () => {
  return (
    <>
      <div className="timeline--list timeline--list__active">
        <p>Delivered</p>
        <div className="timeline--list__flex">
          <p className="timeline--list__date">03-04-2019</p>
          <p className="timeline--list__time">04:20</p>
        </div>
      </div>
    </>
  );
};

export default List;
