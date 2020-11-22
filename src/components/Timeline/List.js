import React from "react";
import { ListContainer } from "components/utils";

const List = ({ location, time, index }) => {
  const [date, timeNow] = time.split(" ");

  const content = (
    <>
      <p>{location}</p>
      <div className="timeline--list__flex">
        <p className="timeline--list__date">{date}</p>
        <p className="timeline--list__time">{timeNow}</p>
      </div>
    </>
  );
  if (index === 0) {
    return (
      <>
        <div className="timeline--list timeline--list__active">{content}</div>
      </>
    );
  }
  return (
    <>
      <div className="timeline--list">{content}</div>
    </>
  );
};

export default List;
